<template>
    <label>{{label}}</label>
    <input v-if="inputType==='text'" type="text" @input="(val) => this.$emit('written', val)">
    <input v-if="inputType==='number'" type="number" @input="(val) => this.$emit('written', val)">
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