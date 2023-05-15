<script setup>
import SledilciGrid from "../components/sledilci/SledilciGrid.vue"
</script>

<template>
  <h3 class="text-center">Iskanje uporabnikov</h3>
  <br />
  <!-- write html input for search quear -->
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            aria-label="Search"
            aria-describedby="basic-addon2"
            v-model="iskanje"
          />
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="showUsers(iskanje)"
          >
            Išči
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- write html input for search quear -->
  <SledilciGrid
    :sledilci="rezultat"
    :label="'sledi'"
    @sledi="(userId) => followUser(userId)"
  ></SledilciGrid>
</template>

<script>
import { SearchUsers } from "../control/SearchUsers"

export default {
  components: {
    SledilciGrid,
  },
  data() {
    return {
      iskanje: "",
      rezultat: [],
    }
  },
  methods: {
    async showUsers(name) {
      const res = await SearchUsers.findUsers(name)

      this.rezultat = res
    },
    async followUser(id) {
      console.log(id)
      await SearchUsers.followUser(id)
    },
  },
}
</script>
