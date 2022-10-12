import React from 'react';

function Home() {
  // const {checkTokenLogin} = React.useContext(MyContext);
  // const [backToLogin, setBackToLogin] = useState('');

  // useEffect(() => {
  //   async function checkToken() {
  //     setBackToLogin(!checkTokenLogin());
  //   }
  //   checkToken();
  // }, []);

  return (
    <div>
      <h1>Home</h1>
      {/* {backToLogin ? <Navigate to={ `/` } /> : null} */}
    </div>
  )
}

export default Home;