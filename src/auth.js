const isAuthenticated = () => {  
  const tokenLoginStorage = localStorage.getItem('tokenLogin');

  // TODO: criar depois uma rota do backend para validar o token
  return tokenLoginStorage ? true : false;

};

export default isAuthenticated;
