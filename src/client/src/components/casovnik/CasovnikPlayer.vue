<template>
  <h3 class="text-center">Časovnik</h3>
  <!-- Odstevanje casa -->
  <!-- Kontrola casovnika -->
  <div class="containter">
    <div class="row box">
      <div class="col-3"></div>
      <div class="col">Čas: (se odsteva)</div>
      <div class="col-1">
        <button type="button" class="btn btn-secondary">Začni</button>
      </div>
      <div class="col-2"></div>
    </div>
    <br />
    <div class="row box">
      <div class="col">Konec časovnika</div>
      <div class="col">
        <button type="button" class="btn btn-secondary">Začni</button>
      </div>
      <div class="col">
        <button type="button" class="btn btn-secondary">Pavza</button>
      </div>
      <div class="col">
        <button type="button" class="btn btn-secondary">Izhod</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.box {
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  background-color: rgb(209, 209, 209);
}
</style>
