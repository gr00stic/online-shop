// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Cart from './components/Cart';
import Header from './components/Header';
import { Route, RouterProvider, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';

const App = () => {
  const [userData, setUserData] = useState();
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [isCartOpened, setIsCartOpened] = useState(false);

  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  }

  const onAddToCart = (item) => {
    console.log(cartItems);
    setCartItems(prev => [...prev, item])
    axios.post(`http://localhost:5000/api/cart/add-item/${item._id}`, {}, config)
  }

  const onCartRemove = (item) => {
    const name = item.name;
    setCartItems(cartItems.filter((item) => item.name !== name));
    axios.get(`http://localhost:5000/api/product/get/${item._id}`).then(res => console.log(res.data))
    axios.put(`http://localhost:5000/api/cart/remove-item/${item._id}`, {}, config)
  }


  useEffect(() => {
    axios.get("http://localhost:5000/api/product/products").then(res => setItems(res.data.products))
    axios.get("http://localhost:5000/api/cart/get-cart", config).then(res => setCartItems(res.data))
    axios.get(`http://localhost:5000/api/user/get-user/${'64311903fd4e0990885ae033'}`).then(res => setUserData(res.data))
  }, [])

  return (
    <div className='wrapper clear'>

      {isCartOpened ? <Cart items={cartItems} onRemove={(item) => onCartRemove(item)} onClose={() => setIsCartOpened(false)} /> : null}
      <Header onClickCart={() => setIsCartOpened(true)} />
      <Routes>
        <Route path='/' element={<Home searchValue={searchValue} setSearchValue={setSearchValue} items={items} onAddToCart={onAddToCart} />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/profile' element={<Profile userData={userData} />} />
      </Routes>
    </div>
  )
}

export default App;
