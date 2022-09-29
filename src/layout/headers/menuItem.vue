<template>
  <template v-for="menu in navList" :key="menu.id">
    <el-menu-item
      @click="toMenu(menu)"
      :index="menu.id"
      v-if="!menu.children"
      :attr-index="menu.id"
    >
      <!-- <el-icon><i-ep-menu /></el-icon>
    <template #title>{{ menu.name }}</template> -->
      {{ menu.name }}
    </el-menu-item>
    <el-sub-menu :index="menu.id" v-else>
      <template #title>
        <!-- <el-icon><i-ep-menu /></el-icon>
      <span>{{ menu.name }}</span> -->
        {{ menu.name }}
      </template>
      <menu-item :navList="menu.children"></menu-item>
    </el-sub-menu>
  </template>
</template>

<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()

defineProps({
  navList: Array
})

const router = useRouter()

const toMenu = (ele) => {
  // console.log('ele:', ele)
  store.commit('app/updateHeaderMenuActive', {
    navId: ele.id,
    navName: ele.name
  })

  if (ele.id === 0) {
    router.push({
      name: '/'
    })
  } else {
    router.push({
      name: 'category',
      params: { navId: ele.id }
    })
  }
}
</script>
