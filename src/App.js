import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from "./components/About";
import ExportImport from './components/ExportImport'; 
import Services from './components/Services'; 
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css'; // Import global styles
// Main App component

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <ExportImport />
      <Services />
      <ContactForm />   
      <Footer />
    </>
  );
}

export default App;
