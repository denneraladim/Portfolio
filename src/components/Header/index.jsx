import styles from './Header.module.scss';

export const Header = () => {
    return (
        <header className={styles.header}>
            <span>DennerAladim.dev</span>
            <nav>
               <a href="#">Home</a> 
               <a href="#">Sobre</a>
               <a href="#">Projetos</a>
               <a href="#">Contatos</a>
           </nav>
        </header>
    )
}