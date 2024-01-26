import React from "react"
import './Header.css'

// Importando os icones e pasando como variaveis 
import smallRight from '../assets/icons/small-right.png'
import smallLeft from '../assets/icons/small-left.png'
import search from '../assets/icons/search.png'


const Header = ({ onSearchInputChange }) => {
    const handleInputChange = (event) => {
        // event é o objeto de evento associado à mudança no input
        // event.target é o elemento que disparou o evento, neste caso, o input
        // event.target.value contém o valor atual do input no momento da mudança
    
        // onSearchInputChange é uma função passada como propriedade para este componente
        // Esta função é usada para atualizar o estado de pesquisa no componente pai
        onSearchInputChange(event.target.value)
    }
    
    return(
        <nav className="header__navigation">
            <div className="navigation">
                <button className="arrow-left">
                    <img src={smallLeft} alt="" />
                </button>
                <button className="arrow-right">
                    <img src={smallRight} alt="" />
                </button>
            </div>
            <div className="header__search">
                <img src={search} alt="" />
                <input
                    id="search-input"
                    maxLength="800"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                    placeholder="O que você quer ouvir?"
                    // Quando há uma mudança no input é chamada a função que pega seu valor
                    onChange={handleInputChange}
                />
            </div>
            <div className="header__login">
                <button className="subscribe">Inscreva-se</button>
                <button className="login">Entrar</button>
            </div>
        </nav>
    )
}

// exportamos a função que contem o html
export default Header