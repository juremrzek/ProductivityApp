<script setup>
import WindowManager from "../components/WindowManager.vue"
import SledilciGrid from "../components/sledilci/SledilciGrid.vue"
import { User } from "../entities/User"
</script>

<!-- TODO -->
<!-- Tega windowa ni na nobenem diagramu -->
<template>
  <window-manager>
    <h3 class="text-center">Uporabniki, ki jim sledim</h3>
    <sledilci-grid :sledilci="sledim"></sledilci-grid>
    <br />
    <br />
    <h3 class="text-center">Sledilci</h3>
    <sledilci-grid :sledilci="sledilci"></sledilci-grid>
  </window-manager>
</template>

<script>
import { User } from "../entities/User"
import { SearchUsers } from "../control/SearchUsers"

export default {
  data() {
    return {
      sledim: [new User(2, "Joze", "Sluga")],
      sledilci: [new User(1, "Janez", "Novak")],
    }
  },
  methods: {
    async getFollowing() {
      const users = await SearchUsers.getFollowing()

      this.sledim = users
    },
  },
  async beforeMount() {
    await this.getFollowing()
  },
}
</script>
