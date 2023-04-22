// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Card from './components/Card';
import Header from './components/Header';

let arr = [
  { title: 'chel phone', price: 500, imageUrl: 'img/chel.jpg' },
  { title: 'cell phone', price: 1500, imageUrl: 'img/logo.png' },
  { title: 'chugunnaya vanna', price: 50000, imageUrl: 'img/chugun.jpg' },
  { title: 'gazoviy televizor', price: 25000, imageUrl: 'img/gaz.jpg' },
]



const App = () => {

  const [items, setItems] = useState([]);

// Примечание: пустой массив зависимостей [] означает, что
// этот useEffect будет запущен один раз
// аналогично componentDidMount()
useEffect(() => {
  fetch("http://localhost:5000/api/product/products")
    .then(res => res.json())
    .then(
      (result) => {
        setItems(result.products);
      }
    )
}, [])
console.log(items);
  return (
    // <BrowserRouter>
    // <Routes>
    //   <Route path = "/" element = {<Navigate to={`f${(+new Date()).toString(16)}`} /> }>
    //   </Route>

    // </Routes>
    // </BrowserRouter> 
    <div className='wrapper clear'>
      <div style={{ display: 'none' }} className="cartShadow">
        <div className="cart">
          <h2 className="mb-30">Cart</h2>

          <div className="items">
            <div className="cartItem d-flex align-center mb-10">
              <img className="mr-20" width={70} height={70} src="img/chugun.jpg" alt="item" />
              <div className="mr-20">
                <p className="mb-5">Chugunnaya vanna</p>
                <b>1000$</b>
              </div>
              <img className="cartItemRemove" src="img/btn-remove.svg" alt="remove" />
            </div>

            <div className="cartItem d-flex align-center mb-10">
              <img className="mr-20" width={70} height={70} src="img/chugun.jpg" alt="item" />
              <div className="mr-20">
                <p className="mb-5">Chugunnaya vanna</p>
                <b>1000$</b>
              </div>
              <img className="cartItemRemove" src="img/btn-remove.svg" alt="remove" />
            </div>
          </div>
          <ul>
            <li>
              <span></span>
              <div></div>
              <b></b>
            </li>
            <li>
              <span></span>
              <div></div>
              <b></b>
            </li>
          </ul>
        </div>
      </div>

      <Header />

      <div className='content p-40'>
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Products</h1>
          <div className="search-block d-flex">
            <img src="img/search.svg" alt="Search" />
            <input placeholder="Search" />
          </div>
        </div>
        <div className='d-flex flex-wrap'>
          {/* <Card
            title="Gazoviyo televizor"
            price={1200}
            imageUrl="img/chugun.jpg"
          /> */}
          {
            items.map((item) => (
              <Card
                title={item.name}
                price={item.price}
                imageUrl='img/logo.png'
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
