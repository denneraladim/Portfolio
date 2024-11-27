import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Sobre from './Pages/Sobre'
import Projetos from './Pages/Projetos'
import Contatos from './Pages/Contatos'
import Page404 from './Pages/Page404'
import Header from './Components/Header'
import Container from './Components/Container'
import Footer from './Components/Footer'

function AppRoutes(){
    return (
        <BrowserRouter>
        <Header />
        <Container>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/sobre' element={<Sobre />}></Route>
              <Route path='/projetos' element={<Projetos />}></Route>
              <Route path='/contatos' element={<Contatos />}></Route>
              <Route path='*' element={<Page404 />}></Route>
            </Routes>
          </Container>
          <Footer />
        </BrowserRouter>
    )
}

export default AppRoutes;