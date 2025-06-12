import { Link, useNavigate } from 'react-router-dom'
import { FaTv, FaSearch } from "react-icons/fa";
import './Header.scss'
import { useState } from 'react';





function Header() {

const [pesquisa, setPesquisa] = useState("");
const navegar = useNavigate();


function buscarSerie(e){
    e.preventDefault()

    if(!pesquisa) return;

    navegar(`/Pesquisar?q=${encodeURIComponent(pesquisa.trim())}`
    , setPesquisa(""));


}
    


    return (
    

        <header className='container'>

            <nav className='navegacao'>
                <h2 className='nome-logo'>
                    <Link to="/" className='link-home'><FaTv className='tv-icone'/>Maratona+</Link>
                </h2>
               <form className='formulario' onClick={buscarSerie}>
                    <input type="text" placeholder="Busque por uma Serie" onChange={(e) => setPesquisa(e.target.value)} value={pesquisa} />
                    <button className='botao' type='submit'  ><FaSearch className='pesquisar-icone'/></button>
               </form>
            </nav>
        </header>
 
    )
}
export default Header