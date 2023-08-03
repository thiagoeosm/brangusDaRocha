<template>
    <div class="about">
      <h1>This is a FORM</h1>
      <form>
        <label>Nome</label>
        <input type="text" id="name-box">
      </form>
    </div>
  </template>

  <script>
  export default {
    data() {
        return {
            nomeQueEuEscrevi: 'thiago'
        }
    }
  }

  </script>
  
  <style>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }

  form{
    display: flex;
    flex-direction: column;
    max-width: 200px;
  }

  .name-box{
    max-width: 10px;
  }
  </style>