import './App.scss'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

function App() {
  return (
    <>
      <Header />
      <section className='container'>
        <div className='apresentacao'>
          <p>
            Olá,Sou <br />
            <span>Denner Aladim</span>
            <br />
            Desenvolvedor
            <br />
            Front End
          </p>
          <button className='btn btn-red'>
          Saiba Mais
        </button>
        </div>
        <figure>
          <img
            src="/developer_blue.svg"
            alt="Imagem de Home"
            className='img-home'
          />
        </figure>
      </section>
      <Footer />

    </>
  )
}

export default App
