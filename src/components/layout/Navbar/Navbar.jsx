import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';

function Navbar() {
  const routes = [
    { 'name': 'Home', 'url': '/' },
    { 'name': 'Rastrear encomenda', 'url': '/rastreio' }
  ];

  return (
    <header>
      <nav className={styles.navbar}>
        <ul className={styles.routes}>
          {routes.map((route, index) => (
            <li key={index}>
              <Link to={route.url}>{route.name}</Link>
            </li>
          ))}
          <li>
            <a href="https://consultarcep.vercel.app/" rel="noopener noreferrer" >Consultar CEP</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;