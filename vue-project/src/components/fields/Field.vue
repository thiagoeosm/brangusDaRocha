<template>
  <label>{{label}}</label>
  <input v-if="inputType==='text'" type="text" @input="(val) => this.$emit('written', val)">
  <input v-if="inputType==='number'" type="number" @input="(val) => this.$emit('written', val)">

  <div v-if="inputType==='radio'">
    <input type="radio" name="Cleiton" value="Batata" @change="(val) => this.$emit('marco', val)"/>
    <label for="Batata">Batata</label>

    <input type="radio" name="Cleiton" value="Estudar" @change="(val) => this.$emit('marco', val)"/>
    <label for="Estudar">Estudar</label>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
  },
  inputType: {
    type: String,
  }
})
</script>

<style>
input{
  margin-top: 3px;
}

</style>