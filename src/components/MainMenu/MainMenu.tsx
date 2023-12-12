import logo from 'assets/logo.svg'
import styles from './MainMenu.module.scss'
import {Link} from 'react-router-dom'

const MainMenu = () => {
  const routes = [
    {
      label: 'Início',
      to: '/',
    },
    {
      label: 'Cardápio',
      to: '/cardapio',
    },
    {
      label: 'Sobre',
      to: '/sobre',
    },
  ]

  return (
    <nav className={styles.mainMenu}>
      <img src={logo} alt='Logo Aluroni' />
      <ul className={styles.mainMenu__list}>
        {routes.map((route) => (
          <li key={route.label} className={styles.mainMenu__link}>
            <Link to={route.to}>{route.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MainMenu
