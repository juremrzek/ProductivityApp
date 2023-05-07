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
}
</script>
