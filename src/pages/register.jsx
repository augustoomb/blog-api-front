import React from 'react';

function Register() {
  return (
    <form>
      <h1>Cadastro</h1>
      <input type="text" placeholder='Nome'></input>
      <input type="email" placeholder='E-mail'></input>
      <input type="password" placeholder='Senha'></input>
      <input type="password" placeholder='Confirme a senha'></input>
      <button>Login</button>
    </form>
  )
}

export default Register;