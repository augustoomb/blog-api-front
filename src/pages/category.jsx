import React, { useState, useEffect } from 'react';
// import MyContext from '../context/MyContext';
import axios from 'axios';

function Category() {
  // const {tokenLogin} = React.useContext(MyContext);
  const [categoriesState, setCategoriesState] = useState();

  async function getCategories() {
    const categories = await axios.get('http://localhost:3000/categories', {
      headers: {
        // 'Authorization': JSON.parse(tokenLogin.token)
        'Authorization': JSON.parse(localStorage.getItem('tokenLogin'))
      }
    })
    setCategoriesState(categories.data);
    // console.log(categories.data);
  }

  useEffect(() => {    
    getCategories();
  }, []);
  
  return (
    <div>
      <h1>Categorias</h1>
      <h1>{categoriesState ? categoriesState[0].name : null}</h1>
      {
        categoriesState
          ? (
            <table>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Actions</th>
              </tr>
              { categoriesState.forEach((category) => {
                <tr key={ category.id }>
                  <td>{ category.id }</td>
                  <td>{ category.name }</td>
                  <td>teste</td>
                </tr>
              }) }        
            </table>
          )
          :
          <h4>Loading ...</h4>
      }
    </div>
  )
}

export default Category;