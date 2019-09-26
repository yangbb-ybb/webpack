<!-- 
  实现 一个虚拟列表组件 
  有缓存控制，不需要每次都重新计算 得到高度
 -->
<template>
  <div class="list-view" @scroll="handleScroll">
    <div class="list-view-phantom" :style="{
         height: contentHeight
      }"></div>
    <!-- 将普通元素 也当成 覅自组件 -->
    <div ref="content" class="list-view-content">
      <div
        class="list-view-item"
        :style="{
          height: itemHeight + 'px'
        }"
        v-for="item in visibleData"
      >{{ item }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NodesList",
  data() {
    return {
      visibleData: [],
      all_data: [],

      // 由于数绩一直在计算  这个性能是不值得我们肯定的 所以我们需要缓存
      // 缓存 2020  百万 家族
      // 讲一下 有 2年
      lastMeasuredIndex: -1,
      startIndex: 0,
      sizeAndOffsetCahce: {}
    };
  },
  props: {
    itemHeight: {
      type: Number,
      default: 30
    },
    ans: {
      type: String
    },
    estimatedItemSize: {
      type: Number,
      default: 30
    }
  },
  // 我们是直接
  // 我靠 TMD 这个预谋的 有点长
  // 那么接下去 我就应该多想想 为什么 轮子应该怎么造
  computed: {
    contentHeight() {
      // 虚拟列表的
      //return this.all_data.length * this.itemHeight + "px";
      const {
        all_data,
        itemSizeGetter,
        lastMeasuredIndex,
        estimatedItemSize
      } = this;
      // 这里从直接取长度去 明显是不合理的 我们就不想从遍历取得数据
      // let total = 0;
      // for (let i = 0, j = all_data.length; i < j; i++) {
      //   total += itemSizeGetter.call(null, all_data[i], i);
      // }
      // return total + "px";
      // 当内容在缓存 中存在过以后
      let itemCount = all_data.length;
      if (lastMeasuredIndex >= 0) {
        const lastMeasuredSizeAndOffset = this.getLastMeasuredSizeAndOffset();
        return (
          lastMeasuredSizeAndOffset.offset +
          lastMeasuredSizeAndOffset.size +
          (itemCount - 1 - lastMeasuredIndex) * estimatedItemSize +
          "px"
        );
      } else {
        return itemCount * estimatedItemSize + "px";
      }
    },
    // 添加 一个 函数计算属性
    //
    itemSizeGetter: {
      type: Function,
      get() {
        return function(v, k) {
          // console.log(v, k);
          // 动态 获取 每个 元素的 高度这里直接给了
          return 30;
        };
      }
    }
  },
  mounted() {
    // 在子组件中一般是娶不到父组件的值的 但是vue给我们 留了个口子 我们可以直接使用 $parent 知道有可以直接使用
    // 实在小  你就可以自己实现一个 window 属性 去维护 数据，如果你
    // 其实vue 就是一个可以瞎搞的框架
    //this.$parent.ans = "hello";
    for (let i = 0; i < 100; i++) {
      this.all_data.push(i + "y");
    }
    this.updateVisibleData();
  },

  methods: {
    // 现在 肯定是不行的 当我们 滚动的时候 渲染的数据实在是 太多了 我们无法
    // 我们需要 对数据做一些 缓存 数据
    updateVisibleData(scrollTop) {
      scrollTop = scrollTop || 0;

      const visibleCount = Math.ceil(this.$el.clientHeight / this.itemHeight);
      //const start = Math.floor(scrollTop / this.itemHeight);
      const start = this.findNearestItemIndex(scrollTop);
      const end = start + visibleCount;
      this.visibleData = this.all_data.slice(start, end);
      // 所以 可以直接在子组件里面 调用子组件的 vue的数据是循环嵌套 也就是我们索索的环数据
      // 所以其实 你就是 可以直接拿到父组件的
      // 需要 将列表拉到我们的 窗口位子
      this.$refs.content.style.webkitTransform = `translate3d(0, ${start *
        this.itemHeight}px, 0)`;
    },
    // 高度
    // contentHeight() {

    // },
    handleScroll() {
      const scrollTop = this.$el.scrollTop;
      this.updateVisibleData(scrollTop);
    },
    // 提高自己
    // 输入scrollTop 找出 当前 列表显示的初始项
    // 这个还是 可以优化的 我们的数组我们存的 是天然有序的数组
    // 我们可以 直接使用 2分发查找 配合默认值（个位数次） // 必须有返回值
    findNearestItemIndex(scrollTop) {
      const { all_data, itemSizeGetter } = this;
      let total = 0;
      for (let i = 0, j = all_data.length; i < j; i++) {
        // 计算属性
        //const size = itemSizeGetter.call(null, all_data[i], i);
        // 从缓存 中取出 当前的值
        const size = this.getItemSizeAndOffset(i).size;
        total += size;
        if (total >= scrollTop || i === j - 1) {
          return i;
        }
      }
      return 0;
    },
    // 输入 一个数字  找出张昌应该 滚动到的位置
    // 一个位置 绩效3.5
    // 从一个技术实现 看出点什么东西 东西是如何实现的 （别人的项目是如何实现）
    // 数据量太小就是和没有优化 其实是 一样的
    // 4个月 至少能达到 p6 然后再一年 达到 p7的水准
    getItemSizeAndOffset(index) {
      // 从缓存中取出 保存的信息
      const {
        lastMeasuredIndex, // 实现
        sizeAndOffsetCahce, // 一个存在 内存里面的 变量
        all_data,
        itemSizeGetter
      } = this;
      // 取出 位置信息
      // 不用怀疑
      // 若超出 直接返回
      // 当在缓存中存的上一个数据大于 传递进来的 数据 那么我们就直接 从缓存中去数据
      if (lastMeasuredIndex >= index) {
        return sizeAndOffsetCahce[index];
      }
      // 能进入到这里 就是新的  就必须 重新计算（这里还是可以重新优化下的）
      let offset = 0;
      if (lastMeasuredIndex >= 0) {
        const lastMeasured = sizeAndOffsetCahce[lastMeasuredIndex];
        if (lastMeasured) {
          offset = lastMeasured.offset + lastMeasured.size;
        }
      }
      for (let i = lastMeasuredIndex + 1; i <= index; i++) {
        const item = all_data[i];
        const size = itemSizeGetter.call(null, item, i);
        sizeAndOffsetCahce[i] = {
          size,
          offset
        };
        offset += size;
      }
      if (index > lastMeasuredIndex) {
        this.lastMeasuredIndex = index;
      }
      return sizeAndOffsetCahce[index];
    },
    // 已经计算过的 高度列表和
    getLastMeasuredSizeAndOffset() {
      return this.lastMeasuredIndex >= 0
        ? this.sizeAndOffsetCahce[this.lastMeasuredIndex]
        : { offset: 0, size: 0 };
    }
  }
};
</script>
<style scoped lang="less">
.list-view {
  height: 400px;
  overflow: auto;
  position: relative;
  border: 1px solid #aaa;
}
.list-view-phantom {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  z-index: -1;
}
.list-view-content {
  // background-color: aquamarine;
  // transition: all 0;
  left: 0;
  right: 0;
  top: 0;
  position: absolute;
}
.list-view-item {
  padding: 5px;
  color: #666;
  line-height: 30px;
  box-sizing: border-box;
}
</style>