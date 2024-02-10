import styles from './Sobre.module.scss'
import Foto from './images/denner.png'
import { FaHtml5, FaCss3, FaReact } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';

export const Sobre = () => {
    return (
      <section className={styles.sobre}>
        <div className={styles.bio}>
         <img src={Foto} alt="Foto" className={styles.foto} />
        <div className={styles.textos}>
            <h2>Sobre</h2>
            <p>Sou <span>Denner Aladim</span><br/>
            <strong>Dev Front End</strong></p>
            <p>Trabalho com Desenvolvimento Web.</p>
            <p>Busco oportunidades para iniciar minha carreira e contribuir de forma significativa para projetos inovadores.</p>
            <p>Embora eu ainda não tenha experiência profissional na área, estou determinado a aprender e crescer em um ambiente colaborativo.</p>
        </div>
        </div>
        <div className={styles.techs}>
          <h3>Techs</h3>
         <div className={styles.icones}>
           <FaHtml5 className={styles.icone} />
           <FaCss3 className={styles.icone}/>
           <SiJavascript className={styles.icone}/>
           <FaReact className={styles.icone}/>
         </div>
        </div>
      </section>
    )
    
}