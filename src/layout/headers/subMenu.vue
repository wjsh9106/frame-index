<template>
  <el-sub-menu :index="menu.id" v-if="menu.children">
    <template #title>
      <!-- <el-icon><i-ep-menu /></el-icon>
      <span>{{ menu.name }}</span> -->
      {{ menu.name }}
    </template>
    <sub-menu
      :menu="menuItem"
      v-for="menuItem in menu.children"
      :key="menuItem.id"
    ></sub-menu>
  </el-sub-menu>
  <el-menu-item :index="menu.id" v-else>
    <!-- <el-icon><i-ep-menu /></el-icon>
    <template #title>{{ menu.name }}</template> -->
    {{ menu.name }}
  </el-menu-item>
</template>

<script setup>
import { defineProps } from 'vue'

// 定义接收参数
defineProps({
  menu: Object
})
</script>
