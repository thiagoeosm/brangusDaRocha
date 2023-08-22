<template>
    <label>{{label}}</label>
    <input type="number">
   </template>

<script setup>
defineProps({
  label: {
    type: String,
  }
})
</script>

<style>
input{
  margin-top: 3px;
}

</style>