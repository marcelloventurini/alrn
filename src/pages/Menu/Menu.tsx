import { useState } from 'react'
import themeStyles from 'styles/Theme.module.scss'
import Filters from './Filter/Filters'
import Items from './Items/Items'
import styles from './Menu.module.scss'
import Ordinator from './Ordinator/Ordinator'
import Search from './Search/Search'

const Menu = () => {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState<number | null>(null)
  const [ordinator, setOrdinator] = useState('')

  return (
    <section className={styles.menu}>
      <h3 className={themeStyles.titulo}>Cardápio</h3>
      <Search search={search} setSearch={setSearch} />
      <div className={styles.menu__filters}>
        <Filters filter={filter} setFilter={setFilter} />
        <Ordinator ordinator={ordinator} setOrdinator={setOrdinator} />
      </div>

      <Items search={search} filter={filter} ordinator={ordinator} />
    </section>
  )
}

export default Menu
