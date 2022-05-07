<template>
  <div class="common-layout">
    <el-container>
      <el-header><Headers /></el-header>
      <el-main>
        <div class="main-page"><router-view /></div>
      </el-main>
      <el-footer><span>Footer</span></el-footer>
    </el-container>
  </div>
</template>

<script setup>
import Headers from './headers'
</script>
<style lang="scss" scoped>
.el-container {
  min-height: 100vh;
}
.el-main {
  background-color: #eeeeee;
  .main-page {
    width: 80%;
    margin: 0 auto;
  }
}
.el-footer {
  background-color: #434343;
  color: #979797;
}
</style>
