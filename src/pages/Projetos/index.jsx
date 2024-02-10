import { useEffect, useState } from "react"
import { Card } from "../../components/Card"
import styles from './Projetos.module.scss'

export const Projetos = () => {

  const [repositories, setRepositoires] = useState([])
  useEffect(() => {
      const buscarRepositorios = async () => {
          const response = await fetch('https://api.github.com/users/denneraladim/repos?page=1&per_page=50')
          const data = await response.json()
          setRepositoires(data)
      }

      buscarRepositorios()
  },[])
    return (
      <section className={styles.projetos}>
          <h2>Projetos</h2>
          {
            repositories.length > 0 ? (
          <section className={styles.lista}>
              {
                repositories.map((repo)=> (
                  <Card
                   key={repo.id}
                   name={repo.name}
                   description={repo.description}
                   html_url={repo.html_url}
                  /> 
                ))
              }
          </section>
            ): (
              <p>Carregando repositórios...</p>
            )
          }
      </section>
    )
}