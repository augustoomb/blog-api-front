import React, { useState } from 'react';
import MyContext from '../context/MyContext';
import { Navigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {axiosLogin, tokenLogin} = React.useContext(MyContext);

  const handleClick = async () => {
    await axiosLogin(email, password);
    setEmail('');
    setPassword('');
  };

  // useEffect(() => {
  //   async function checkToken() {
  //     checkTokenLogin();
  //   }
  //   checkToken();
  // }, []);

  return (
    <form>
      <h1>Login</h1>
      <input type="email" name="email" value={ email } placeholder='E-mail' onChange={ ({target}) => setEmail(target.value) }></input>
      <input type="password" value={ password } placeholder='Senha' onChange={ ({target}) => setPassword(target.value) }></input>
      <input type="button" value="login" onClick={ handleClick } />
      {tokenLogin.error ? (<p>{ tokenLogin.error.message }</p>) : null}      
      { tokenLogin.token ? <Navigate to={ `/home` } /> : null}
    </form>
  )
}

export default Login;
