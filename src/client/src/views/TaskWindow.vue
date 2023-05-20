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
      <opravilo-uredi
        :task-prop="editTask"
        :key="editTask"
        @uredi="(task) => urediAPI(task)"
      ></opravilo-uredi>
    </template>
  </WindowManager>
</template>

<script>
import { EditTasks } from "../control/EditTasks"
import { useUserStore } from "../stores/user"

export default {
  data() {
    return {
      opravila: [],
      helperWindow: 0,
      editTask: new Task(null, "", "", null),
      user: useUserStore(),
    }
  },
  methods: {
    uredi(id) {
      const task = this.opravila.filter((opravilo) => opravilo.getId() == id)[0]
      // console.log(this.opravila[0].id)
      this.editTask = task
    },
    async urediAPI(task) {
      if (!this.user.isLoggedIn()) {
        const index = this.opravila.findIndex(
          (opravilo) => opravilo.getId() == task.getId()
        )
        this.opravila[index] = task
        return
      }

      await EditTasks.editTask(task)
      await this.update()
    },
    async showTasks() {
      if (!this.user.isLoggedIn()) {
        return
      }
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
        if (!this.user.isLoggedIn()) {
          this.opravila.push(newTask)
          return
        }

        await EditTasks.addTask(newTask)
        await this.update()
      }

      await this.update()
    },
    async manageTask(id, state) {
      if (!this.user.isLoggedIn()) {
        const index = this.opravila.findIndex(
          (opravilo) => opravilo.getId() == id
        )
        this.opravila.splice(index, 1)
        return
      }

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
  watch: {
    user: {
      handler: function (val, oldVal) {
        this.showTasks()
      },
      deep: true,
    },
  },
  beforeMount() {
    this.showTasks()
  },
}
</script>
