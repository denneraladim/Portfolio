import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Container from '../../Components/Container'
import styles from './page404.module.css'

function Page404(){
    return (
        <>
         <Header />
         <Container>
            <h2 className={styles.titulo2}>Algo de Errado!</h2>
            <div className={styles.textos}>
                <span className={styles.texto_grande}>404</span><br/>
                <strong className={styles.texto_vermelho}>Página Não Localizada!</strong>
            </div>
         </Container>
         <Footer />
        </>
    )
}

export default Page404;