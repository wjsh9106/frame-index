<template>
  <div class="navbar">
    <!-- <el-image
      :src="require('@/assets/images/logo_touming.png')"
      :preview-src-list="[require('@/assets/images/logo_touming.png')]"
      alt=""
      style="width: 60px"
    /> -->
    <el-menu
      :default-active="store.getters.headerMenuActiveIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <!-- LOGO -->
      <el-menu-item index="-1">
        <a href="/"
          ><el-image
            :src="require('@/assets/images/logo_touming.png')"
            alt=""
            style="width: 60px"
        /></a>
      </el-menu-item>
      <!-- 此处调用menu-item组件 -->
      <menu-item :navList="navList"></menu-item>
    </el-menu>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { navs } from '@/api/nav'
import MenuItem from './menuItem.vue'
import $ from 'jquery'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

onMounted(() => {
  initNav()
})

const navList = ref([])

const initNav = async () => {
  const res = await navs()
  navList.value = res.result
  // console.log('navs', res.result)
  if (router.currentRoute._value.name === 'index') {
    store.commit('app/updateHeaderMenuActive', {
      navId: navList.value[0].id,
      navName: navList.value[0].name
    })
  }
  $('li[attr-index=' + store.getters.headerMenuActiveIndex + ']').addClass(
    'is-active'
  )
}

watch(
  () => store.getters.headerMenuActiveIndex,
  (newVal, oldVal) => {
    // console.log('newVal:', newVal, '|', 'oldVal:', oldVal)
    $('li[attr-index=' + newVal + ']').addClass('is-active')
  },
  { immediate: true, deep: true }
)
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
