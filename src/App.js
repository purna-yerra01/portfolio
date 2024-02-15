import React from 'react';
import './App.css';
import Blogsection from './component/blogsection';
import Footer from './component/footer';
import Navbar from './component/navbar';
import Projectsection from './component/projectsection';
import Recommendationsection from './component/recommendationsection';
import Title from './component/title';

function App() {
  return (
    <div>
      <Navbar/>
      <Title/>
      <Recommendationsection/>
      <Projectsection/>
      <Blogsection/>
      <Footer/>
    </div>
  );
}

export default App;
