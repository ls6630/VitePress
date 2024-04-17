# 导航栏
``` html
<template>
  <view>
    <navTab></navTab>
    <button id="button" @click="back">返回</button>
    <view>状态栏高度: {{ statusBarHeight }}</view>
    <view>胶囊距离状态栏距离: {{ menuTop }}</view>
    <view>胶囊高度: {{ menuHeight }}</view>
    <view>微信胶囊距离底部距离: {{ menuBottom }}</view>
    <view>导航栏高度: {{ navigateHeight }}</view>
    <view>是否显示导航栏: {{ isShow }}</view>
  </view>
</template>

<script>
import navTab from "./nav.vue";
export default {
  data() {
    return {
      // 状态栏高度
      statusBarHeight: uni.getStorageSync("navigateInfo").statusBarHeight,
      // 胶囊距离状态栏距离
      menuTop: uni.getStorageSync("navigateInfo").menuTop,
      // 胶囊高度
      menuHeight: uni.getStorageSync("navigateInfo").menuHeight,
      // 微信胶囊距离底部距离
      menuBottom: uni.getStorageSync("navigateInfo").menuBottom,
      // 导航栏高度
      navigateHeight: uni.getStorageSync("navigateInfo").navigateHeight,
      // 是否显示导航栏
      isShow: uni.getStorageSync("navigateInfo").isShow,
    };
  },
  components: { navTab },
  // mounted() {
  //   const button = document.getElementById('button')
  //   console.log(button)
  // },
  mounted () {},
  methods: {
    back() {
      uni.navigateBack();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
```

``` js
<script>
export default {
  onLaunch: function () {
    console.log("App Launch");
  },
  onShow: function () {
    // 获取系统信息
    let systemInfomations = uni.getSystemInfoSync();
    // console.log(systemInfomations);
    // console.log(systemInfomations.deviceType);
    let navigateInfo = {};

    // 状态栏高度
    navigateInfo.statusBarHeight = systemInfomations.statusBarHeight;

    // 判断是否是手机端
    if (systemInfomations.deviceType != "phone") {
      console.log("不是手机端");
      navigateInfo.isShow = false;
    } else {
      console.log("是手机端");
      navigateInfo.isShow = true;
    }

    // #ifdef MP-WEIXIN
    // 获取微信胶囊信息
    let wxObj = wx.getMenuButtonBoundingClientRect();
    // 微信胶囊距离状态栏距离
    navigateInfo.menuTop = wxObj.top - systemInfomations.statusBarHeight;
    // 微信胶囊高度
    navigateInfo.menuHeight = wxObj.height;
    // 微信胶囊距离底部距离
    navigateInfo.menuBottom =
(wxObj.top - systemInfomations.statusBarHeight) * 2;
    // 菜单栏高度
    if (systemInfomations.osName != "ios") {
      navigateInfo.navigateHeight =
 navigateInfo.menuTop + navigateInfo.menuHeight + navigateInfo.menuTop;
    } else {
      navigateInfo.navigateHeight =
 navigateInfo.menuTop +
 navigateInfo.menuHeight +
 navigateInfo.menuBottom;
    }
    // #endif

    // #ifdef H5
    navigateInfo.statusBarHeight = 0
    navigateInfo.menuRight = 281
    navigateInfo.menuTop = 0;
    navigateInfo.menuHeight = 44;
    navigateInfo.menuBottom = 0;
    navigateInfo.menuBottnavigateHeightom = 44;
    // #endif

    uni.setStorageSync("navigateInfo", navigateInfo);
  },
  onHide: function () {
    console.log("App Hide");
  },
  onLoad() {},
};
</script>

```