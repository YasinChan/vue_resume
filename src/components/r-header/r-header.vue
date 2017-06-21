<template>
  <div class="r-header">
    <div class="title">陈耀耀前端简历</div>
    <div type="primary" @click="modal1 = true" class="detail"><Icon type="person" class="icon"></Icon></div>
    <Modal
      class="modal"
      v-model="modal1"
      title="联系方式"
      @on-ok="ok"
      @on-cancel="cancel">
      <p><Icon type="iphone" style="padding-right: 17px"></Icon>15720606717</p>
      <p><Icon type="email" style="padding-right: 13px"></Icon>yasinchan2016@gmail.com</p>
      <p><Icon type="home" style="padding-right: 11px"></Icon>
        <a href="https://yasinchan.com">https://yasinchan.com</a>
      </p>
      <p><Icon type="social-github" style="padding-right: 10px"></Icon>
        <a href="https://github.com/yasinchan">https://github.com/yasinchan</a>
      </p>
    </Modal>
  </div>
</template>

<script type="text/ecmascript-6">
  import Modal from 'iview/src/components/modal'
  import Icon from 'iview/src/components/icon'
  import 'iview/dist/styles/iview.css'

  export default {
    data () {
      return {
        modal1: false
      }
    },
    methods: {
      ok () {
        this.$Message.info('点击了确定')
      },
      cancel () {
        this.$Message.info('点击了取消')
      }
    },
    components: {
      Modal,
      Icon
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .r-header
    position relative
    height 44px
    text-align center
    color $color-theme
    background $color-background-rheader
    font-size $font-size-medium-x
    .detail
      position absolute
      right 20px
      top 50%
      transform translateY(-50%)
      .icon
        background #20A0FF
        border-color black
    .title
      position absolute
      left 50%
      top 50%
      transform translate(-50%, -50%)
</style>
