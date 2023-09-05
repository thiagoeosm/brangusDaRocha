<template>
  <label>{{label}}</label>
  <input v-if="inputType==='text'" type="text" @input="(val) => this.$emit('written', val)">
  <input v-if="inputType==='number'" type="number" @input="(val) => this.$emit('written', val)">

  <div v-if="inputType==='radio'" v-for="item in options">
    <input type="radio" name="Cleiton" :value=item @change="(val) => this.$emit('marco', val)"/>
    <label>{{item}}</label>
  </div>
  
</template>

<script setup>
defineProps({
  label: {
    type: String,
  },
  inputType: {
    type: String,
  },
  options: {
    type: Array,
  }
})
</script>

<style>
input{
  margin-top: 3px;
}

</style>