import {Header} from '../../components/Header'
import {Footer} from '../../components/Footer'
import { Link } from 'react-router-dom'

export const Home = () => {
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
          <Link to='/sobre' className='btn btn-red'>
          Saiba Mais
        </Link>
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