<script setup>
import Field from '../components/fields/Field.vue'
import Butao from '../components/utilities/Butao.vue'
</script>

<template>
    <div class="about">
      <h1>This is a FORM</h1>
      <form>
        <Field inputType="text" label="nombre" @written="(val) => this.nome = val.target.value"/>
        <Field inputType="number" label="viejo" @written="(val) => this.idade = val.target.value"/>
      </form>
      <Butao label="Processar" @clicked="getResult(this.nome, this.idade)" />

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
        getResult(nome, idade) {
          const phrase = `O ${nome}, tambem conhecido como Shnalzer, tem ${idade} anos e dentes de sabre.`
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