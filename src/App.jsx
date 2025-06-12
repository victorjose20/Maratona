import { Outlet } from 'react-router';
import './app.scss';
import Header from './componentes/Header/Header.jsx';
import Footer from './componentes/footer/footer.jsx';




function App() {


  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
