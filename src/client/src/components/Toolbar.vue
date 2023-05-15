<script setup>
import { useUserStore } from "../stores/user"
const user = useUserStore()
console.log(user.isLoggedIn)
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
    <div class="container-fluid">
      <a href="#" class="navbar-brand"></a>
      <button
        type="button"
        class="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <!-- Neprijavljen uporabnik -->
        <div class="navbar-nav">
          <a
            href="#"
            class="nav-item nav-link active"
            @click="this.$router.push({ name: 'home' })"
            >Opravila</a
          >
        </div>
        <!-- Neprijavljen uporabnik -->
        <div class="navbar-nav">
          <a
            href="#"
            class="nav-item nav-link active"
            @click="this.$router.push({ name: 'iskanje' })"
            >Iskanje uporabnikov</a
          >
        </div>
        <div class="navbar-nav">
          <a
            href="#"
            class="nav-item nav-link active"
            @click="this.$router.push({ name: 'sledilci' })"
            >Sledilci</a
          >
        </div>
        <!-- Neprijavljen uporabnik -->
        <div class="navbar-nav">
          <a
            href="#"
            class="nav-item nav-link active"
            @click="this.$router.push({ name: 'napaka' })"
            >Prijavi napako</a
          >
        </div>
        <!-- Admin -->
        <!-- Analitik -->
        <!-- Razvijalec  -->
        <!--  -->
        <div class="navbar-nav ms-auto">
          <a
            href="#"
            class="nav-item nav-link"
            @click.prevent="logout()"
            v-if="user.isLoggedIn() == true"
          >
            Odjava
          </a>
          <a
            href="#"
            class="nav-item nav-link"
            @click.prevent="this.$router.push({ name: 'prijava' })"
            v-if="user.isLoggedIn() != true"
          >
            Prijava
          </a>
          <!-- <template> v-else>Prijava</template> -->
        </div>
        <!--  -->
      </div>
    </div>
  </nav>
  <!--  -->
</template>

<script>
export default {
  methods: {
    logout() {
      const user = useUserStore()
      user.logout()
      this.$router.push({ name: "prijava" })
    },
  },
}
</script>

<style scoped></style>
