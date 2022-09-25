<template>
  <div class="navbar">
    <!-- <el-image
      :src="require('@/assets/images/logo_touming.png')"
      :preview-src-list="[require('@/assets/images/logo_touming.png')]"
      alt=""
      style="width: 60px"
    /> -->
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
    >
      <el-menu-item index="0"
        ><el-image
          :src="require('@/assets/images/logo_touming.png')"
          alt=""
          style="width: 60px"
      /></el-menu-item>
      <sub-menu :menu="menu" v-for="menu in navList" :key="menu.id"></sub-menu>
    </el-menu>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { navs } from '@/api/nav'
import SubMenu from './subMenu.vue'

const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}

const navList = ref([])

const initNav = async () => {
  const res = await navs()
  navList.value = res
  // console.log('navs', res)
}

initNav()
</script>
<style lang="scss" scoped>
.navbar {
  width: 85%;
  height: 60px;
  overflow: hidden;
  background-color: #545c64;
  margin: 0 auto;
}
</style>
