import styles from "./Menu.module.scss"
import logo from "../../assets/logo.svg"
import Search from "./Search/Search"
import { useState } from "react"

const Menu = () => {
  const [search, setSearch] = useState("")

  return (
    <main>
      <nav className={styles.mainMenu}>
        <img src={logo} alt="Logo Aluroni" />
      </nav>

      <header className={styles.header}>
        <div className={styles.header__text}>
          A casa da massa.
        </div>
      </header>

      <section className={styles.menu}>
        <h3 className={styles.menu__title}>Cardápio</h3>
        <Search search={search} setSearch={setSearch} />
      </section>
    </main>
  )
}

export default Menu
