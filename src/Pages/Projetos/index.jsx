import Card from "../../Components/Card";
import styles from './Projetos.module.css'
import projetos from "../../data/projetos";

function Projetos() {
    return (
        <section className={styles.projetos}>
            <h2>Projetos</h2>
            <section className={styles.lista}>

                {projetos.map((projeto) => (

                    <Card
                        key={projeto.id}
                        título={projeto.titulo}
                        Descrição={projeto.descricao}
                        url={projeto.url}
                        url_github={projeto.url_github}
                    />
                ))}

            </section>
        </section>
    )
}

export default Projetos;