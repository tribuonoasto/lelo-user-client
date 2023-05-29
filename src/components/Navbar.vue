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
    <el-menu-item v-if="isGuest" index="register">Register</el-menu-item>
    <el-menu-item v-if="isGuest" index="login">Login</el-menu-item>
    <el-menu-item v-if="!isGuest" @click="handleLogout" >Logout</el-menu-item>
  </el-menu>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useUserStore } from "../stores/user";
import { storeToRefs } from 'pinia'

//Store
const userStore = useUserStore();
const { isGuest } = storeToRefs(userStore)

const activeIndex = ref("1");

const handleSelect = (key, keyPath) => {
  // console.log(key, keyPath);
};

function handleLogout () {
  localStorage.clear()
  isGuest.value = true
}

onMounted(() => {
})

</script>

<style>
.flex-grow {
  flex-grow: 1;
}
</style>
