import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Provider from './context/Provider';
import isAuthenticated from './auth';

const PrivateRoute = () => {
  if (isAuthenticated()) {
    return <Outlet />
  }

  return <Navigate to="/" />;
};

function App() {
  return (
    <Provider>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />
        {/* <Route path="/home" element={<Home/>} /> */}
        <Route exact path='/home' element={<PrivateRoute/>}>
          <Route exact path='/home' element={<Home/>}/>
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
