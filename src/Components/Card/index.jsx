import styles from './Card.module.css'


function Card(props){
    const handleButton = () => {
        window.open(props.url, '_blank');
    };

    const handleButtonCodigo = () => {
        window.open(props.url_github, '_blank');
    };
    
    return (
        <section className={styles.card}>
            <h3>{props.título}</h3>
            <p>{props.Descrição}</p>
            <div className={styles.card_footer}>
               <button className={styles.card_botao} onClick={handleButtonCodigo} >
                Codigo
            </button>   
            <button className={styles.card_botao} onClick={handleButton} >
                Ver Projeto
            </button>
            </div>
        </section>
    )
}

export default Card;