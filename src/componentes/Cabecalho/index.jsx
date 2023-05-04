import styles from './Cabecalho.module.scss'
import Logo from './logo.png'
import Search from './search.png'

export default function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <img src={Logo} alt="Logo Alura Space" />
            <div className={styles.cabecalho__container}>
                <input className={styles.cabecalho__input} type="text" placeholder="O que você procura?"/>
                <img src={Search} alt="Ícone de bucs" />
            </div>
        </header>
    )
}