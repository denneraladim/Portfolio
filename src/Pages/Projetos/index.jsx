import Card from "../../Components/Card";
import styles from './Projetos.module.css'


function Projetos() {
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

                <Card
                    título="Agência Turismo"
                    Descrição="Este Projeto foi desenvolvido por dados ficticio e utilizando React, JavaScript, Sass e Site Responsivo para tipos desktop, mobile ou tablet."
                    url="https://agencia-turismo-rho.vercel.app/"
                    url_github="https://github.com/denneraladim/AgenciaTurismo"
                />

                <Card
                    título="Formulário"
                    Descrição="Este Projeto foi desenvolvido por dados ficticio e utilizando React, TypeScript, CSS."
                    url="https://formulario-swart-rho.vercel.app/
 "                  url_github="https://github.com/denneraladim/Formulario"
                />

            </section>

        </section>
    )
}

export default Projetos;