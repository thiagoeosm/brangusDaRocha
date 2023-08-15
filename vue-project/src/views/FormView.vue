<template>
    <div class="about">
      <h1>This is a FORM</h1>
      <form>
        <label>Nome</label>
        <input type="text" v-model="nome">
        <label>Nome de idoso</label>
        <input type="text" v-model="idoso">
        <label>Idade</label>
        <input type="number" v-model="idade">
        <label>Quantidade de dentes de sabre</label>
        <input type="number" v-model="sabre">
      </form>
      <button v-on:click="getResult(nome, idade, sabre, idoso)">Processar</button>

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