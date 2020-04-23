import React from 'react';
import classes from './App.module.css';
import { BrowserRouter } from "react-router-dom";
import Toolbar from './components/Navigation/Toolbar/Toolbar'
import Poster from './components/Poster/poster';
import News from './components/News/news';
import Staffs from './components/Staffs/staffs';
import AboutUs from './components/AboutUs/aboutUs';
import Footer from './components/Footer/footer';
function App() {
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Toolbar />
        <Poster />
        <News />
        <Staffs />
        <AboutUs />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
