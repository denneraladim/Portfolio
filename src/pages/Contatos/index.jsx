import { GoMail } from "react-icons/go";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from 'react-icons/fa';
import styles from './Contatos.module.scss'

export const Contatos = () => {
    return (

        <section className={styles.contatos}>
            <h2>Contatos</h2>
            <h3>Entre em contato</h3>
            <p>Para que possamos conversar mais sobre.</p>
            <div className={styles.icones}>
                <a href='mailto:dennerdangelo57@gmail.com' target='_blank' rel='noopener noreferrer'>
                    <GoMail className={styles.icone} />
                </a>

                <a href='https://www.github.com/denneraladim' target='_blank' rel='noopener noreferrer'>
                    <BsGithub className={styles.icone} />
                </a>

                <a href='https://www.linkedin.com/in/denner-dangelo-aladim-de-castro/' target='_blank' rel='noopener noreferrer'>
                    <FaLinkedin className={styles.icone} />
                </a>
            </div>
        </section>
    )
}