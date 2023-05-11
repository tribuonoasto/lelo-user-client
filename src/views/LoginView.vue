<template>
  <el-form :model="form" label-width="120px">
    <el-form-item label="Email">
      <el-input v-model="form.email" />
    </el-form-item>
    <el-form-item label="Password">
      <el-input v-model="form.pass" type="password" autocomplete="off" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Login</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { reactive } from "vue";
import { useUserStore } from "../stores/user";

//Store
const userStore = useUserStore();

// do not use same name with ref
const form = reactive({
  email: "",
  pass: "",
});

const onSubmit = () => {
  userStore.login(form);
};
</script>
