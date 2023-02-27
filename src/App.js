//file import

//library import
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//CSS import
import './App.css';
import Header from './components/header/Header';
import NewsSection from './components/newsSection/NewsSection.js';

//components import


function App() {
  return (
    <div className="App">
      <Header/>
      <NewsSection/>
      <BrowserRouter>
      <Routes>
        <Route/>
        <Route/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
