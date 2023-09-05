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

        <Field inputType="radio" label="escolha" :options=this.options @marco="(val) => this.escolha = val.target.value"/>

      </form>
      <Butao label="Processar" @clicked="getResult(this.nome, this.idade, this.escolha)" />

      <p class="result-box">{{resultado}}</p>
    </div>
  </template>

  <script>
  export default {
    data() {
        return {
            nome: '',
            idade: 0,
            escolha: '',
            resultado: '',
            options: ["batata","estudar","blablun","one piece","minha namorada fala alto"]
        }
    },

    methods: {
        getResult(nome, idade, escolha) {
          const phrase = `O ${nome}, tambem conhecido como Shnalzer, tem ${idade} anos e gosta de ${escolha}.`
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