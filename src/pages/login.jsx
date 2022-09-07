import React, { useState, useEffect } from 'react';
import MyContext from '../context/MyContext';
import { Navigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {tokenLogin, axiosLogin} = React.useContext(MyContext);
  const [skipLogin, setSkipLogin] = useState('');

  const handleClick = async () => {
    await axiosLogin(email, password);
    setEmail('');
    setPassword('');
  };

  const checkTokenLogin = () => {
    const tokenLoginInLocalStorage = localStorage.getItem('tokenLogin');

    setSkipLogin(!tokenLoginInLocalStorage ? false : true);
  }

  useEffect(() => {
    async function checkTokenLoginInLocalStorage() {
      await checkTokenLogin();
    }
    checkTokenLogin();
  }, []);

  return (
    <form>
      <h1>Login</h1>
      <input type="email" name="email" value={ email } placeholder='E-mail' onChange={ ({target}) => setEmail(target.value) }></input>
      <input type="password" value={ password } placeholder='Senha' onChange={ ({target}) => setPassword(target.value) }></input>
      <input type="button" value="login" onClick={ handleClick } />
      {tokenLogin.error ? (<p>{ tokenLogin.error.message }</p>) : null}
      {tokenLogin.token || skipLogin ? <Navigate to={ `/home` } /> : null}
    </form>
  )
}

export default Login;
