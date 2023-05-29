<script setup>
import Navbar from './components/Navbar.vue';
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useUserStore } from "./stores/user";

//Store
const userStore = useUserStore();

const route = useRoute()

const showNavbar = computed(() => {
  const disabledPage = ["login", "register"]
  const checkPage = disabledPage.find(el => el === route.name)
  return checkPage ? false : true
})

</script>

<template>
  <Navbar v-show="showNavbar" />
  <RouterView />
</template>

<style scoped></style>
