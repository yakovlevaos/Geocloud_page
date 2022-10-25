import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import GeoViewer from './components/GeoViewer';
import Cabinet from './components/Cabinet';
import CloudStorage from './components/CloudStorage';
import Chat from './components/Chat';
import AddService from './components/AddService';

function App() {
  return (
    <div className="page-wrapper">
      <Header />
      <GeoViewer />
      <Cabinet />
      <CloudStorage />
      <Chat />
      <AddService />
      <Footer />
    </div>
  );
}

export default App;
