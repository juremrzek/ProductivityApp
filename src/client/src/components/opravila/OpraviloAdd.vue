<template>
  <div class="container form">
    <h4 class="text-center">Novo opravilo</h4>
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
      @click.prevent="$emit('dodaj', task)"
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
  emits: ["dodaj"],
}
</script>

<style scoped>
.form {
  margin-top: 0.5rem;
  padding: 2rem;
  border: 1px solid black;
}
</style>
