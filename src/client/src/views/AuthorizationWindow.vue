<script setup>
import WindowManager from "../components/WindowManager.vue"
import LoginForm from "../components/auth/LoginForm.vue"
import RegisterForm from "../components/auth/RegisterForm.vue"
</script>

<template>
  <WindowManager>
    <template v-slot:default>
      <register-form
        @registracija="(uporabnik) => register(uporabnik)"
      ></register-form
    ></template>
    <template v-slot:secondary>
      <login-form
        @prijava="(name, password) => login(name, password)"
      ></login-form>
    </template>
  </WindowManager>
</template>

<script>
import { UserFactory } from "../utils/UserFactory"
import { useUserStore } from "../stores/user"

export default {
  methods: {
    login(name, password) {
      console.log(name, password)

      const userData = {
        id: 123,
        name: "Janez",
      }

      const user = UserFactory.createUser(1, userData.id, userData.name)
      console.log(user)

      const userStore = useUserStore()
      userStore.$patch({ id: user })
    },
    register(uporabnik) {
      this.$router.push({ name: "home" })
    },
  },
}
</script>
