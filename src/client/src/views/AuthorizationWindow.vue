<script setup>
import WindowManager from "../components/WindowManager.vue"
import LoginForm from "../components/auth/LoginForm.vue"
import RegisterForm from "../components/auth/RegisterForm.vue"
</script>

<template>
  <WindowManager>
    <template v-slot:default> <register-form></register-form></template>
    <template v-slot:secondary> <login-form></login-form> </template>
  </WindowManager>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>
