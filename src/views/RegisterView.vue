<template>
  <div class="container">
    <el-card class="box-card">
      <div class="loginText">Register</div>
      <el-form :model="form" class="form">
        <el-form-item label="">
          <el-input v-model="form.fullname" autocomplete="off" placeholder="Full Name" />
        </el-form-item>
        <el-form-item prop="email" :rules="[
          {
            required: true,
            message: 'Please input email address',
            trigger: 'blur',
          },
          {
            type: 'email',
            message: 'Please input correct email address',
            trigger: ['blur', 'change'],
          },
        ]">
          <el-input v-model="form.email" placeholder="Email" />
        </el-form-item>
        <el-form-item label="">
          <el-input v-model="form.pass" type="password" autocomplete="off" placeholder="Password" />
        </el-form-item>
        <el-form-item label="">
          <el-input v-model="form.checkPass" type="password" autocomplete="off" placeholder="Confirm Password" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Register</el-button>
          <el-button @click="cancel">Cancel</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useUserStore } from "../stores/user";

//Store
const userStore = useUserStore();

const defaultForm = () =>
({
  email: "",
  pass: "",
  fullname: "",
  checkPass: ""
}
)

const form = reactive(defaultForm());

const onSubmit = () => {
  userStore.register(form);
};

function cancel() {
  Object.assign(form, defaultForm())
}
</script>

<style scoped>
.container {
  display: grid;
  place-items: center;
  height: 100vh;
}

.form {
  width: 300px;
  margin-top: 20px;
}

.loginText {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 20px;
}
</style>
