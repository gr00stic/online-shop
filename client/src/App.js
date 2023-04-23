// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './components/Card';
import Cart from './components/Cart';
import Header from './components/Header';

const App = () => {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [isCartOpened, setIsCartOpened] = useState(false);

  const config = {
    headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Mjc1N2M2NjE2Mzk3MjlkMDI3YTNhZCIsIm5hbWUiOiJncjAwc3RpYyIsImVtYWlsIjoic3VzdGljQGdtYWlsLmNvbSIsImlzQWN0aXZhdGVkIjpmYWxzZSwicm9sZSI6IlVTRVIiLCJpYXQiOjE2ODIyNzMxODIsImV4cCI6MTY4MjI3NDk4Mn0.0x75pY-jOdhgSfRY5GBysA5Dm5tSFeEEYQsoX81vVOI'}
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
  }, [])

  return (
    // <BrowserRouter>
    // <Routes>
    //   <Route path = "/" element = {<Navigate to={`f${(+new Date()).toString(16)}`} /> }>
    //   </Route>

    // </Routes>
    // </BrowserRouter> 
    <div className='wrapper clear'>

      {isCartOpened ? <Cart items={cartItems} onRemove={(item) => onCartRemove(item)} onClose={() => setIsCartOpened(false)} /> : null}
      <Header onClickCart={() => setIsCartOpened(true)} />

      <div className='content p-40'>
        <div className="d-flex align-center mb-40 justify-between">
          <h1>{searchValue ? `Searching for: ${searchValue}` : 'Products'}</h1>
          <div className="search-block d-flex">
            <img src="img/search.svg" alt="Search" />
            <input onChange={(event) => setSearchValue(event.target.value)} value={searchValue} placeholder="Search" />
            {searchValue && <img onClick={() => setSearchValue('')} className='cu-p' src="img/btn-remove.svg" alt="clearSearch" />}
          </div>
        </div>
        <div className='d-flex flex-wrap'>
          {
            items.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase())).map((item) => (
              <Card
                key={item._id}
                _id={item._id}
                name={item.name}
                price={item.price}
                imageUrl='img/logo.png'
                onPlus={(obj) => onAddToCart(obj)}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
