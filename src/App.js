import './App.css';
import React, {useState} from 'react';
// Importamos o componente
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/Footer';
import Main from './Main/Main';

function App() {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInputChange = (value) => {
    setSearchInput(value);
  }
  return (
    <div>
      <Sidebar />
      <Header onSearchInputChange={handleSearchInputChange} />
      <Main searchInput={searchInput} />
      <Footer />
    </div>
  );
}

export default App;
