import styles from "./Menu.module.scss"
import logo from "../../assets/logo.svg"


const Menu = () => {
  return (
    <main>
      <nav className={styles.mainMenu}>
        <img src={logo} alt="Logo Aluroni" />
      </nav>
    </main>
  )
}

export default Menu
