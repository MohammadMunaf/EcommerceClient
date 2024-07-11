import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/pages/home/home'
import Show from './components/pages/show/show'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Upload from './components/pages/upload/upload';
import Layout from './Layout';
import ShowItems from './components/pages/searchItems/searchItems';
import Cart from './components/pages/cart/cart';
import { Provider } from 'react-redux';
import store from './store';
import ProductList from './components/pages/productList/productList';
import EditPage from './components/pages/edit/edit'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="productList" element={<ProductList/>}/>
      <Route path="show/:userId" element={<Show />} />
      <Route path="upload" element={<Upload />} />
      <Route path="searchItems" element={<ShowItems />} />
      <Route path="cart" element={<Cart />} />
      <Route path="edit" element={<EditPage/>}/>
    </Route>
  )
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
