import React, { useState, useEffect } from 'react';
import MyContext from './MyContext';
import axios from 'axios';

function Provider({ children }) {  
  const [tokenLogin, setTokenLogin] = useState('');

  const axiosLogin = async (email, password) => {
    try {
      const responseLogin = await axios.post('http://localhost:3000/login', {
        email, password
      })
      if (responseLogin.status === 200) {
        setTokenLogin({ token: responseLogin.data.token })
        localStorage.setItem('tokenLogin', JSON.stringify(responseLogin.data.token))
      }      
    } catch (error) {
      setTokenLogin({ error: { status: error.response.status, message: error.response.data.message} })
    }
  }

  const checkTokenLogin = () => {
    const token = localStorage.getItem('tokenLogin');
    if (token === undefined) {
      return false;
    } else {
      setTokenLogin({ token })
      return true;
    }
    // TODO: implementar lógica real para averiguar se token é válido
  }

  

  useEffect(() => {
    checkTokenLogin();
  }, []);


  const context = {
    axiosLogin, tokenLogin, checkTokenLogin
  }

  return (
    <MyContext.Provider value={ context }>
      { children }
    </MyContext.Provider>
  );
  
}

export default Provider;
