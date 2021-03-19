import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Sidebar } from './components/sidebar/Sidebar';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
    </BrowserRouter>
  );
};

export default App;
