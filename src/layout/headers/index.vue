<template>
  <div class="navbar">
    <el-image
      :src="require('@/assets/images/logo_touming.png')"
      :preview-src-list="[require('@/assets/images/logo_touming.png')]"
      alt=""
      style="width: 60px"
    />
  </div>
</template>

<script setup></script>
<style lang="scss" scoped>
.navbar {
  width: 80%;
  height: 60px;
  overflow: hidden;
  background-color: #fff;
  margin: 0 auto;
}
</style>
