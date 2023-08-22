<template>
    <label>{{label}}</label>
    <input type="text">
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