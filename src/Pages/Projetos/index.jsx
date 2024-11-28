import Card from "../../Components/Card";
import styles from './projetos.module.css'

function Projetos(){
    return (
        <section className={styles.projetos}>
           <h2>Projetos</h2>
           <section className={styles.lista}>
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
           </section>
        
        </section>
    )
}

export default Projetos;