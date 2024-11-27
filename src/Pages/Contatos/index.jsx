import Header from '../../Components/Header'
import Footer from  '../../Components/Footer'
import Container from '../../Components/Container';
import styles from './Contatos.module.css'

import { FaGithub, FaLinkedin } from "react-icons/fa";


function Contatos(){
    return (
        <>
         <Header />
        <Container>
          <section className={styles.contatos}>
              <h2>Contatos</h2>
              <h3>Entre em Contato</h3>
              <p>Para que possamos mais sobre.</p>
              <div className={styles.icones}>

              <a href='https://www.github.com/denneraladim' target='_blank' rel='noopener noreferrer'>
                  <FaGithub  className={styles.icone}/>
              </a>
               
              <a href='https://www.linkedin.com/in/denner-dangelo-aladim-de-castro/' target='_blank' rel='noopener noreferrer'>
                  <FaLinkedin className={styles.icone} />
              </a>
                

              </div>
          </section>
        </Container>
         <Footer />
        </>
    )
}

export default Contatos;