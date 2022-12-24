import { MdOutlineVerified } from 'react-icons/md';

import styles from './Home.module.css';

function Home() {
  document.title = 'Home - Rastreio Correios';

  return (
    <div className={styles.home_container}>
      <h1>Rastreio de encomendas dos Correios</h1>
      <ul className={styles.list}>
        <li><p>Acompanhe o rastreamento de suas encomendas</p> <MdOutlineVerified /></li>
        <li><p>Consulte as informações do seu CEP</p> <MdOutlineVerified /></li>
      </ul>
    </div>
  )
}

export default Home;