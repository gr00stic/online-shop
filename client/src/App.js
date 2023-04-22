// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Card from './components/Card';
import Cart from './components/Cart'
import Header from './components/Header';

const App = () => {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpened, setIsCartOpened] = useState(false);

  const onAddToCart = (item) => {
    setCartItems(prev => [...prev, item])
  }

  useEffect(() => {
    fetch("http://localhost:5000/api/product/products")
      .then(res => res.json())
      .then(
        (result) => {
          setItems(result.products);
        }
      )
  }, [])

  return (
    // <BrowserRouter>
    // <Routes>
    //   <Route path = "/" element = {<Navigate to={`f${(+new Date()).toString(16)}`} /> }>
    //   </Route>

    // </Routes>
    // </BrowserRouter> 
    <div className='wrapper clear'>

      {isCartOpened ? <Cart items={cartItems} onRemove={() => console.log('REMOVE')} onClose={() => setIsCartOpened(false)} /> : null}
      <Header onClickCart={() => setIsCartOpened(true)} />

      <div className='content p-40'>
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Products</h1>
          <div className="search-block d-flex">
            <img src="img/search.svg" alt="Search" />
            <input placeholder="Search" />
          </div>
        </div>
        <div className='d-flex flex-wrap'>
          {
            items.map((item) => (
              <Card
                title={item.name}
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
