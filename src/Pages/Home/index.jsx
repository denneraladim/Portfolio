import Header from '../../Components/Header'
import Footer from '../../Components/Footer'


function Home() {
    return (
        <>
            <Header />
            <section className='container'>
                <div className='apresentacao'>
                    <p>
                        Olá sou,<br />
                        <span>Denner Aladim</span><br />
                        Dev Front End
                    </p>
                    <button className='btn btn-red'>
                        Saiba mais
                    </button>
                </div>
                <figure>
                    <img className='img-home' src="/developer_blue.svg" alt="Imagem da Home" />
                </figure>
            </section>
            <Footer />
        </>
    )
}

export default Home;