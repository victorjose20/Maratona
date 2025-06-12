import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router"
import axios from 'axios';
import './Pesquisar.scss'


const urlSeries = import.meta.env.VITE_SEARCH
const chaveApi = import.meta.env.VITE_API_KEY
const imgposter = import.meta.env.VITE_IMG


function Pesquisar() {

    const [buscaP] = useSearchParams();

    const [series, setSeries] = useState([]);
    const consulta = buscaP.get("q");


    const buscadorDeSeries = async (url) => {
        try {
            const resposta = await axios.get(url);
            const data = resposta.data

            
            setSeries(data.results);
        } catch (erro) {
            console.error("Erro ao buscar series:", erro)
        }
    }

    useEffect(() => {
        const buscaComUrl = `${urlSeries}?${chaveApi}&query=${consulta}`;

        buscadorDeSeries(buscaComUrl);
    }, [consulta])


    return (
        <div className="container-pesquisar">
            <h2 className="resultados">Resultados para: <span>{consulta}</span></h2>
            <div className={`cards ${series.length === 1 ? "unico" : ""}`}>
                {series.length === 0 && <p>Carregando...</p>}
                {series.map(itens => (
                    <div className="card" key={itens.id}>
                        <p key={itens.id}>{itens.name}</p>
                        <img src={`${imgposter}${itens.poster_path}`} alt="" />
                        <Link to={`/Tv/${itens.id}`} ><button >Saber Mais</button></Link>
                    </div>

                ))}
            </div>
        </div>
    )
}
export default Pesquisar