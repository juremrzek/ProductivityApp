<script setup>
import WindowManager from "../components/WindowManager.vue"
</script>

<template>
  <WindowManager>
    <div class="container form">
      <h4 class="text-center">Prijavi napako</h4>
      <div class="form-group">
        <label for="exampleInputEmail1">Ime napake</label>
        <input type="email" class="form-control" v-model="name" />
      </div>
      <br />
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Opis napake</label>
        <textarea
          class="form-control"
          rows="3"
          v-model="description"
        ></textarea>
      </div>
      <br />
      <button
        type="submit"
        class="btn btn-secondary float-end"
        @click="reportIssue()"
      >
        Prijavi
      </button>
      <br />
      <br />
    </div>
  </WindowManager>
</template>

<script>
import { Issue } from "../entities/Issue"
import { IssueReport } from "../control/IssueReport"

export default {
  data() {
    return {
      name: "",
      description: "",
    }
  },
  methods: {
    async reportIssue() {
      const issue = new Issue(
        null,
        this.name,
        this.description,
        Date.now(),
        null,
        false,
        null
      )

      await IssueReport.addIssue(issue)
      this.name = ""
      this.description = ""
    },
  },
}
</script>

<style scoped>
.form {
  margin-top: 0.5rem;
  margin: 2rem;
  padding: 2rem;
  border: 1px solid black;
}
</style>
