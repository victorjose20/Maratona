import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import './Tv.scss'
import NaoEncontrada from './NaoEncontrada';

const escolhido = import.meta.env.VITE_API_1
const chaveApi = import.meta.env.VITE_API_KEY
const imgposter = import.meta.env.VITE_IMG
const Token = import.meta.env.VITE_TOKEN

function Tv() {

    const { id } = useParams();
    const [sabeMais, setSaberMais] = useState(null);



    const carregarSerie = async (url) => {

        try {
            const resposta = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${Token}`,
                    'Content-Type': 'application/json'
                }
            });
            setSaberMais(resposta.data);
        } catch (erro) {
            console.error("Erro ao buscar series:", erro)
        }
    }

    useEffect(() => {
        const selecionarSerie = `${escolhido}${id}${chaveApi}`
        carregarSerie(selecionarSerie);

    }, [id])

    return (
        <>
            {sabeMais ? (
                <div className='tv-container' >

                    <p className='nome-tv'>{sabeMais.name}</p>
                    <img src={`${imgposter}${sabeMais.poster_path}`} alt="" />
                    <p className='sinopse-tv'>Sinopse: {sabeMais.overview}</p>
                    <p className='ano-tv'>Data de Laçamento: {sabeMais.first_air_date}</p>



                </div>
            ) : (
                <NaoEncontrada />
            )}
        </>
    )
}
export default Tv