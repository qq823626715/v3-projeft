<!--
 * @Description: 
-->
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
const time = ref('')
let timer:number|undefined = undefined

onMounted(() => {
  fnGetTimeTimer()
})
onUnmounted(() => {
  timer && window.clearInterval(timer)
})
function fnGetTimeTimer():void {
  timer = window.setInterval(() => {
    const current = new Date()
    let minutes = current.getMinutes()
    let second = current.getSeconds()
    time.value = `${current.getHours()} : ${minutes > 10 ? minutes: '0' + minutes} : ${second > 9 ? second : '0' + second}`
  }, 1000)
}
</script>
<template>
  <div class="login-page">
    <el-header class="login-header">
      <div class="header-left">
        <img src="@/img/logo.png" class="logo"/>
        <p class="title">自动化测试平台</p>
      </div>
      <div class="header-middle">{{ time }}</div>
      <div class="header-right">
        <el-link href="https://element-plus.org" target="_blank">关于平台</el-link>
        <el-link type="primary">设置</el-link>
      </div>
    </el-header>
    <el-main class="login-main">123123</el-main>
  </div>
</template>

<style lang="scss" scoped>
$login_header_heigth: 96px;
.login-page {
  width: 100%;
  height: 100vh;
}
.login-header {
  height: $login_header_heigth;
  background: #FFFFFF;
  padding: 26px 52px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    width: 138px;
    height: 44px;
    margin-right: 24px;
    vertical-align: middle;
  }
  .title {
    display: inline-block;
    padding-left: 24px;
    height: 32px;
    vertical-align: middle;
    line-height: 32px;
    font-size: 24px;
    color: #606266;
    border-left: 1px solid $main_border_color;
  }
  .header-middle {
    font-size: 20px;
    color: #909399;
  }
  .el-link {
    font-size: 16px;
    &:not(:first-child){
      margin-left: 24px;
    }
  }
}
.login-main {
  height: calc(100vh - #{$login_header_heigth});
  background: url("../../img/page-bg/login-bg.png") center top/auto 100% no-repeat
}
</style>
