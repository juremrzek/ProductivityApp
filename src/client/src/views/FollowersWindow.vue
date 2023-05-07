<script setup>
import WindowManager from "../components/WindowManager.vue"
import SledilciGrid from "../components/sledilci/SledilciGrid.vue"
</script>

<!-- TODO -->
<!-- Tega windowa ni na nobenem diagramu -->
<template>
  <window-manager>
    <h3 class="text-center">Uporabniki, ki jim sledim</h3>
    <sledilci-grid :sledilci="sledilci"></sledilci-grid>
    <br />
    <br />
    <h3 class="text-center">Sledilci</h3>
    <sledilci-grid
      :sledilci="sledilci.filter((el) => el.id < 3)"
    ></sledilci-grid>
  </window-manager>
</template>

<script>
export default {
  data() {
    return {
      sledilci: [
        { id: 1, ime: "Janez" },
        { id: 2, ime: "Micka" },
        { id: 3, ime: "Miha" },
      ],
    }
  },
}
</script>
