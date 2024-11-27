import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Sobre from './Pages/Sobre'
import Projetos from './Pages/Projetos'
import Contatos from './Pages/Contatos'

function AppRoutes(){
    return (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/sobre' element={<Sobre />}></Route>
            <Route path='/projetos' element={<Projetos />}></Route>
            <Route path='/contatos' element={<Contatos />}></Route>
          </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;