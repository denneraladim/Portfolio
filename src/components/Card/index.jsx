import styles from './Card.module.scss'
import { FaCss3Alt, FaHtml5, FaReact } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import { BsArrowRight } from 'react-icons/bs'

export const Card = () => {
    return (
        <section className={styles.card}>
            <h3>Título do projeto</h3>
            <p>Texto descritivo do projeto.</p>
            <div className={styles.card_footer}>
                <div className={styles.card_icones}>
                   <FaHtml5 />
                   <FaCss3Alt />
                   <SiJavascript />
                   <FaReact />
            </div>
            <button className={styles.card_botao}>
                   <BsArrowRight />
            </button>
            </div>
        </section>
    )
}