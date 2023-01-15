import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Navbar'
import Title from './Title'
import News from './News';
import Gallery from './Gallery'
import MapFrame from './MapFrame';
import Footer from './Footer';
import SideNav from './SideNav';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <SideNav /> */}
    {/* <Navbar /> */}
    {/* <Title />
    <News />
    <Gallery />
    <MapFrame /> */}
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
