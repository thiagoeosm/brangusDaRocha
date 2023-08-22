<template>
    
    <button v-on:click="utility">{{label}}</button>

</template>

<script setup>
defineProps({
  label: {
    type: String,
  },
  utility: {
    type: Function,
  }
})
</script>

<style>
button{
    max-width: 80px;
    margin-top: 10px;
  }

</style>
