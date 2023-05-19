<script setup>
import WindowManager from "../components/WindowManager.vue"
import OpravilaList from "../components/opravila/OpravilaList.vue"
import OpraviloAdd from "../components/opravila/OpraviloAdd.vue"
import OpraviloUredi from "../components/opravila/OpraviloUredi.vue"

import { Task } from "../entities/Task"
</script>

<template>
  <WindowManager>
    <opravila-list
      :opravila="opravila"
      @opravi="(id) => manageTask(id, 1)"
      @izbrisi="(id) => manageTask(id, 2)"
      @uredi="(id) => uredi(id)"
    ></opravila-list>
    <template v-slot:secondary
      ><opravilo-add @dodaj="(newTask) => submitForm(newTask)"> </opravilo-add>
      <opravilo-uredi :task-prop="editTask" :key="editTask"></opravilo-uredi>
    </template>
  </WindowManager>
</template>

<script>
import { EditTasks } from "../control/EditTasks"

export default {
  data() {
    return {
      opravila: [],
      helperWindow: 0,
      editTask: new Task(null, "", "", null),
    }
  },
  methods: {
    uredi(id) {
      const task = this.opravila.filter((opravilo) => opravilo.getId() == id)[0]
      // console.log(this.opravila[0].id)
      this.editTask = task
    },
    async showTasks() {
      this.opravila = await EditTasks.getTasks()
    },
    isFormValid(formData) {
      return (
        formData.getName().length &&
        formData.getDate() &&
        formData.getDescription()
      )
    },
    async submitForm(newTask) {
      if (this.isFormValid(newTask)) {
        await EditTasks.addTask(newTask)
        await this.update()
      }

      await this.update()
    },
    async manageTask(id, state) {
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
