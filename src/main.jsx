import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Home from './Paginas/Home.jsx'
import Tv from './Paginas/Tv.jsx'
import Pesquisar from './Paginas/Pesquisar.jsx'
import NaoEncontrada from './Paginas/NaoEncontrada.jsx'
import Footer from './componentes/footer/footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='Tv/:id' element={<Tv />} />
          <Route path='/Pesquisar' element={<Pesquisar />} />

          <Route path='*' element={<NaoEncontrada />} />
          
        </Route>

      </Routes>

    </BrowserRouter>

  </StrictMode>,
)
