import './App.css'
import React, {useState} from 'react'
// Importamos o componente
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'
import Footer from './Footer/Footer'
import Main from './Main/Main'

function App() {
  // Criando uma variável de estado chamada searchInput e uma função para atualizá-la (setSearchInput)
  const [searchInput, setSearchInput] = useState('')

  // Criando uma variável de estado chamada searchInput e uma função para atualizá-la (setSearchInput)
  const handleSearchInputChange = (value) => {
    setSearchInput(value)
  }
  return (
    <div>
      <Sidebar />
      <Header onSearchInputChange={handleSearchInputChange} />
      <Main searchInput={searchInput} />
      <Footer />
    </div>
  )
}

export default App
