import Card from "../../Components/Card";
import styles from './projetos.module.css'


function Projetos(){
    return (
        <section className={styles.projetos}>
           <h2>Projetos</h2>
           <section className={styles.lista}>
               <Card 
               título="Calculadora"
               Descrição="Calculadora Web é um projeto simples desenvolvido com HTML, CSS e JavaScript para realizar operações matemáticas básicas."
               url=" https://calculadora-woad-eight.vercel.app/"
               url_github="https://github.com/denneraladim/Calculadora"
               />
              
           </section>
        
        </section>
    )
}

export default Projetos;