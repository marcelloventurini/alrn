import styles from "./Menu.module.scss"
import logo from "../../assets/logo.svg"
import Search from "./Search/Search"
import { useState } from "react"
import Filters from "./Filter/Filters"
import Ordinator from "./Ordinator/Ordinator"
import Items from "./Items/Items"

const Menu = () => {
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState<number | null>(null)
  const [ordinator, setOrdinator] = useState("")

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
        <div className={styles.menu__filters}>
          <Filters filter={filter} setFilter={setFilter} />
          <Ordinator ordinator={ordinator}
            setOrdinator={setOrdinator} />
        </div>

        <Items search={search} filter={filter} ordinator={ordinator} />
      </section>
    </main>
  )
}

export default Menu
