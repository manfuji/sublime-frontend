import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'tw-elements';
import reportWebVitals from './reportWebVitals';
import Layout from './components/layouts/layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './Home/contact';
import Trips from './Home/trips';
import Recommendation from './Home/recommendation';
import Payment from './Home/payment';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Layout>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/trip" element={<Trips />} />
        <Route path="/recommend" element={<Recommendation />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  </Layout>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
