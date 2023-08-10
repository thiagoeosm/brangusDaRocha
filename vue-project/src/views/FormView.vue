<template>
    <div class="about">
      <h1>This is a FORM</h1>
      <form>
        <label>Nome</label>
        <input type="text" v-model="nome">
        <label>Idade</label>
        <input type="number" v-model="idade">
      </form>
      <button v-on:click="getResult(nome, idade)">Processar</button>

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
          const phrase = `O ${nome} tem ${idade} anos.`
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