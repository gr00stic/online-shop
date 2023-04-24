import React from 'react';
import { BrowserRouter, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.scss';
import 'macro-css'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//     <Route path='/' element={<App />}/>
//     </>
//   )
// )

// const App = () => {
//   return <RouterProvider router={router} />
// }
