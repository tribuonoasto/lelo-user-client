<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    :router="true"
    @select="handleSelect"
  >
    <el-menu-item index="/">LOGO</el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="register">Register</el-menu-item>
    <el-menu-item index="login">Login</el-menu-item>
  </el-menu>
</template>

<script setup>
import { ref } from "vue";

const activeIndex = ref("1");
const handleSelect = (key, keyPath) => {
  // console.log(key, keyPath);
};
</script>

<style>
.flex-grow {
  flex-grow: 1;
}
</style>
