<template>
  <div class="container form">
    <h4 class="text-center">Uredi dogodek</h4>
    <div class="form-group">
      <label for="exampleInputEmail1">Ime</label>
      <input class="form-control" v-model="event.name" />
    </div>
    <br />
    <div class="form-group">
      <label for="exampleInputEmail1">Opis</label>
      <input class="form-control" v-model="event.description" />
    </div>
    <br />
    <div class="form-group">
      <label for="exampleInputEmail1">Začetek</label>
      <input type="date" class="form-control" v-model="event.start" />
    </div>
    <br />
    <div class="form-group">
      <label for="exampleInputEmail1">Trajanje</label>
      <input type="number" class="form-control" v-model="event.duration" />
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <button
      type="submit"
      class="btn btn-secondary float-end"
      @click.prevent="$emit('edit', event)"
    >
      Potrdi
    </button>
    <br />
    <br />
  </div>
</template>

<script>
export default {
  name: "dogodekUredi",
  data() {
    return {
      event: {
        name: "",
        description: "",
        start: "",
        duration: "",
      },
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
