import { Link } from 'react-router-dom'
import styles from './Home.module.scss'

export const Home = () => {
  return (

    <section className={styles.home}>
          <div className={styles.apresentacao}>
            <p>
              Olá,Sou <br />
              <span>Denner Aladim</span>
              <br />
              Desenvolvedor
              <br />
              Front End
            </p>
            <Link to='/sobre' className={`${styles.btn} ${styles.btn_red}`}>
              Saiba Mais
            </Link>
          </div>
          <figure>
            <img
              src="/developer_blue.svg"
              alt="Imagem de Home"
              className={styles.img_home}
            />
          </figure>
    </section>
  )
}