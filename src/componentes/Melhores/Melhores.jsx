import axios from "axios";
import { useEffect, useState } from "react"
import './Melhores.scss'
import Tv from "../../Paginas/Tv";
import { Link } from "react-router";

const melhores = import.meta.env.VITE_API
const chaveApi = import.meta.env.VITE_API_KEY
const imgposter = import.meta.env.VITE_IMG


function Melhores(){

const [melhoresS, setMelhoresS] = useState([]);


   const melhoresRanqueados = async (url) => {
        try {
            const resposta = await axios.get(url);
            const data = resposta.data

            
            setMelhoresS(data.results);
        } catch (erro) {
            console.error("Erro ao buscar series:", erro)
        }
    }

     useEffect(() => {
            const buscarMelhores = `${melhores}?${chaveApi}`;
            console.log(buscarMelhores)
            melhoresRanqueados(buscarMelhores);
        }, [])



    return(
          <div className="container-melhores">
            <h1>Top Series</h1>
            <div className="cards">
                
                {melhoresS.length === 0 && <p>Carregando...</p>}
                {melhoresS.map(itens => (
                    <div key={itens.id} className="card">
                        <p className="nome-serie" key={itens.id}>{itens.name}</p>
                        <img src={`${imgposter}${itens.poster_path}`} alt="" />

                        <Link to={`/Tv/${itens.id}`} ><button >Saber Mais</button></Link>
                        
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Melhores;