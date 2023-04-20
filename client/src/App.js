// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

const App = () => {
  return (
    // <BrowserRouter>
    // <Routes>
    //   <Route path = "/" element = {<Navigate to={`f${(+new Date()).toString(16)}`} /> }>
    //   </Route>

    // </Routes>
    // </BrowserRouter>
    <div className='wrapper clear'>
      <header className='d-flex justify-between align-center p-40'>
        <div className='d-flex align-center'>
          <img width={100} height={100} src='img/logo.png' />
          <div>
            <h3 className='text-uppercase'>Sho p</h3>
            <p>Vintage electronics</p>
          </div>
        </div>
        <ul className='d-flex'>
          <li className='mr-15'>
            <img width={18} height={18} src='img/cart.svg' />
            <span>500$</span>
          </li>
          <li>
            <img width={18} height={18} src='img/user.svg' />
          </li>
        </ul>
      </header>
      <div className='content p-40'>
        <h1 className='mb-40'>Products</h1>
        <div className='d-flex'>
          <div className='card'>
            <img width={133} height={112} src='img/gaz.jpg' />
            <p>Gazoviy televizor</p>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Price</span>
                <b>100$</b>
              </div>
              <button className='button'>
                <img width={11} height={11} src='img/plus.svg' alt='Plus' />
              </button>
            </div>
          </div>
          <div className='card'>
          <img width={133} height={112} src='img/gaz.jpg'/>
          <p>Gazoviy televizor</p>
          <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column'>
              <span>Price</span>
              <b>100$</b>
            </div>
            <button className='button'>
              <img width={11} height={11} src='img/plus.svg' alt='Plus'/>
            </button>
          </div>
        </div>
        <div className='card'>
          <img width={133} height={112} src='img/chugun.jpg'/>
          <p>Chugunnaya vanna</p>
          <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column'>
              <span>Price</span>
              <b>1000$</b>
            </div>
            <button className='button'>
              <img width={11} height={11} src='img/plus.svg' alt='Plus'/>
            </button>
          </div>
        </div>
        <div className='card'>
          <img width={133} height={112} src='img/chugun.jpg'/>
          <p>Chugunnaya vanna</p>
          <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column'>
              <span>Price</span>
              <b>1000$</b>
            </div>
            <button className='button'>
              <img width={11} height={11} src='img/plus.svg' alt='Plus'/>
            </button>
          </div>
        </div>
        
        </div>
      </div>
    </div>
  );
}

export default App;
