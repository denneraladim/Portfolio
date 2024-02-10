import styles from './Page404.module.scss'

export const Page404 = () => {
  return (
    <>
      <h2 className={styles.titulo2}>Algo de Errado!</h2>
      <div className={styles.textos}>
      <span className={styles.texto_grande}>404</span><br />
      <strong className={styles.texto_vermelho}>Página Não Localizada!</strong>
      </div>
    </>
  )
}