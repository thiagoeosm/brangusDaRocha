<template>
    <button @click="this.$emit('clicked')">{{label}}</button>

</template>

<script setup>
defineProps({
  label: {
    type: String,
  }
})
</script>

<style>
button{
    max-width: 80px;
    margin-top: 10px;
  }

</style>
