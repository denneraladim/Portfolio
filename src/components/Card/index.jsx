import styles from './Card.module.scss'
import { FaCss3Alt, FaHtml5, FaReact } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export const Card = ({name, description, html_url}) => {
    return (
        <section className={styles.card}>
            <h3>{name}</h3>
            <p>{description}</p>
            <div className={styles.card_footer}>
                <div className={styles.card_icones}>
                   <FaHtml5 />
                   <FaCss3Alt />
                   <SiJavascript />
                   <FaReact />
            </div>
            <Link to={html_url} className={styles.card_botao}>
                   <BsArrowRight />
            </Link>
            </div>
        </section>
    )
}