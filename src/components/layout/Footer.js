import { AiFillGithub } from 'react-icons/ai'

import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.title}>
        <p>API para consulta de CEP e rastreio de encomendas dos Correios</p>
      </div>
      <div className={styles.contact}>
        <a href="https://github.com/reecco/rastreiocorreios">
          <p>Acesse o código fonte aqui</p>
          <AiFillGithub />
        </a>
      </div>
      <div className={styles.copyright}>
        <p>&copy; 2022,</p>
        <p> Fred Recco</p>
      </div>
    </footer>
  )
}

export default Footer