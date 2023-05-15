<script setup>
import { Task } from "../../entities/Task.js"
</script>

<template>
  <div class="container form">
    <h4 class="text-center">Opravilo uredi</h4>
    <div class="form-group">
      <label for="exampleInputEmail1">Opravilo</label>
      <input class="form-control" v-model="task.name" />
    </div>
    <br />
    <div class="form-group">
      <label for="exampleFormControlTextarea1">Opis</label>
      <textarea
        class="form-control"
        rows="3"
        v-model="task.description"
      ></textarea>
    </div>
    <br />
    <div class="form-group">
      <label for="exampleInputEmail1">Rok</label>
      <input
        type="date"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter email"
        v-model="task.date"
      />
    </div>
    <br />
    <button
      type="submit"
      class="btn btn-secondary float-end"
      @click.prevent="
        $emit(
          'uredi',
          new Task(taskProp.getId(), task.name, task.description, task.date)
        )
      "
    >
      Dodaj
    </button>
    <br />
    <br />
  </div>
</template>

<script>
export default {
  name: "OpraviloAdd",
  data() {
    return {
      task: {
        name: "",
        description: "",
        date: "",
      },
    }
  },
  props: {
    taskProp: {
      type: Object,
      required: true,
    },
  },
  emits: ["uredi"],
  beforeMount() {
    this.task = {
      name: this.taskProp.getName(),
      description: this.taskProp.getDescription(),
      date: this.taskProp.getDate(),
    }
  },
}
</script>

<style scoped>
.form {
  margin-top: 0.5rem;
  padding: 2rem;
  border: 1px solid black;
}
</style>
