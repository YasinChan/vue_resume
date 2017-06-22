<template>
  <div id="app">
    <r-header></r-header>
    <tab></tab>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import RHeader from 'components/r-header/r-header'
  import Tab from 'components/tab/tab'

  export default {
    components: {
      RHeader,
      Tab
    }
  }
</script>

<style scoped>

</style>
