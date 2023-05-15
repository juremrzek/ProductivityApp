<script setup>
import WindowManager from "../components/WindowManager.vue"
import OpravilaList from "../components/opravila/OpravilaList.vue"
import OpraviloAdd from "../components/opravila/OpraviloAdd.vue"
</script>

<template>
  <WindowManager>
    <opravila-list
      :opravila="opravila"
      @opravi="(id) => manageTask(id, 1)"
      @izbrisi="(id) => manageTask(id, 2)"
    ></opravila-list>
    <template v-slot:secondary><opravilo-add> </opravilo-add> </template>
  </WindowManager>
</template>

<script>
import { EditTasks } from "../control/EditTasks"

export default {
  data() {
    return {
      opravila: [],
    }
  },
  methods: {
    async showTasks() {
      this.opravila = await EditTasks.getTasks()
    },
    isFormValid(formData) {
      return (
        formData.ime.length > 0 &&
        formData.rok.length > 0 &&
        formData.opis.length > 0
      )
    },
    async submitForm() {},
    async manageTask(id, state) {
      console.log(id, state)
      // Complete task
      if (state == 1) {
        await EditTasks.completeTask(id)
      }
      // Delete task
      else if (state == 2) {
        await EditTasks.removeTask(id)
      }

      await this.update()
    },
    // TODO WTF is this
    async update() {
      await this.showTasks()
    },
  },
  beforeMount() {
    this.showTasks()
  },
}
</script>
