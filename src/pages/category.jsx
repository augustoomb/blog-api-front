import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import MyContext from '../context/MyContext';

function Category() {
  const [categories, setCategories] = useState('');
  const {tokenLogin} = React.useContext(MyContext);

  // const getCategories = async () => {
    
  //   try {
  //     const responseCategories = await axios.get('http://localhost:3000/categories',
  //     {
  //       headers: {
  //         'Authorization': `${tokenLogin}`
  //       }
  //     });
  //     if(responseCategories.status === 200) {
  //       console.log(JSON.stringify(responseCategories.data));
  //     }
  //   } catch (error) {
      
  //   }
  // };

  // useEffect(() => {
  //   // getCategories();
  //   console.log(`Teste: ${tokenLogin}`);
  // }, []);

  return (
    <form>
      <h1>Categorias</h1>
      <table>
        <th>ID</th>
        <th>Nome</th>
        <th>Actions</th>
      </table>
    </form>
  )
}

export default Category;