import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Container from '../../Components/Container'


function Page404(){
    return (
        <>
         <Header />
         <Container>
            <h2>Algo de Errado!</h2>
            <div>
                <span>404</span><br/>
                <strong>Página Não Localizada!</strong>
            </div>
         </Container>
         <Footer />
        </>
    )
}

export default Page404;