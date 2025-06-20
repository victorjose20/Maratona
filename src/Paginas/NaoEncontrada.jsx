
import { Link } from "react-router";
import './NaoEncontrada.scss'

function NaoEncontrada() {

    return (
        <div className="container-Nao-Encontrado">
            <div>
                <h1>404</h1>
                <p>Página não encontrada.</p>
                <Link to="/"><button >Voltar para a página inicial</button></Link>
            </div>

        </div>
    );

}
export default NaoEncontrada