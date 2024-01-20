import React from 'react';
import './App.css';
import Products from './admin/Products';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './main/Main';
import ProductCreate from './admin/components/ProductCreate';
import ProductEdit from './admin/components/ProductEdit';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Main}/>
          <Route path='/admin/products' Component={Products} />
          <Route path='/admin/products/create' Component={ProductCreate} />
          <Route path='/admin/products/:id/edit' Component={ProductEdit} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
