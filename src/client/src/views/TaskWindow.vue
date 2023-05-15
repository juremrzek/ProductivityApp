<script setup>
import WindowManager from "../components/WindowManager.vue"
import OpravilaList from "../components/opravila/OpravilaList.vue"
import OpraviloAdd from "../components/opravila/OpraviloAdd.vue"
</script>

<template>
  <WindowManager>
    <opravila-list :opravila="opravila"></opravila-list>
    <template v-slot:secondary><opravilo-add> </opravilo-add> </template>
  </WindowManager>
</template>

<script>
import { EditTasks } from "../control/EditTasks"

export default {
  data() {
    return {
      opravila: [
        {
          id: "123fsadf",
          ime: "neki za narest",
          rok: "jutr",
          opis: "blablabal",
        },
        {
          id: "123fsadf",
          ime: "neki za narest",
          rok: "jutr",
          opis: "blablabal",
        },
      ],
    }
  },
  methods: {
    // TODO
    async showTasks() {
      this.opravila = await EditTasks.getTasks()
    },
    // TODO te ne rabim
    // ne bom te implementiral
    showEditTaskForm(task) {},
    isFormValid() {},
    // TODO WTF is this
    update() {},
  },
  beforeMount() {
    this.showTasks()
  },
}
</script>
