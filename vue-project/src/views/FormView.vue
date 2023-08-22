<script setup>
import TextField from '../components/fields/TextField.vue'
import NumberField from '../components/fields/NumberField.vue'
import Butao from '../components/utilities/Butao.vue'
</script>

<template>
    <div class="about">
      <h1>This is a FORM</h1>
      <form>
        <TextField label="nombre" />
        <TextField label="viejo" />
        <NumberField label="idade" />
        <NumberField label="dentes de velho" />
      </form>
      <button v-on:click="getResult(nome, idade, sabre, idoso)">Processar</button>
      <Butao label="Processar2" utility=this.getResult />

      <p class="result-box">{{resultado}}</p>
    </div>
  </template>

  <script>
  export default {
    data() {
        return {
            nome: '',
            idade: 0,
            resultado: ''
        }
    },

    methods: {
        getResult(nome, idade, sabre, idoso) {
          const phrase = `O ${nome}, tambem conhecido como ${idoso} tem ${idade} anos e ${sabre} dentes de sabre.`
          this.resultado = phrase;
        }
    }
  }

  </script>
  
  <style>
  form{
    display: flex;
    flex-direction: column;
    max-width: 200px;
  }

  input{
    margin-top: 3px;
  }

  button{
    max-width: 80px;
    margin-top: 10px;
  }

  .result-box{
    margin-top: 30px;
    font-weight: bold;
    font-size: large;
  }

  </style>