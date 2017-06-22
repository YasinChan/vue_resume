<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/works">
      <span class="tab-link">作品</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/introduce">
      <span class="tab-link">简介</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/skills">
      <span class="tab-link">技能
      </span>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .tab
    display: flex
    height: 44px
    line-height: 44px
    font-size: $font-size-medium
    background: $color-background-tab
    .tab-item
      flex: 1
      text-align: center
      .tab-link
        padding-bottom: 5px
        color: $color-text
      &.router-link-active
        .tab-link
          color: $color-text-active
          border-bottom: 2px solid $color-text-active
</style>
