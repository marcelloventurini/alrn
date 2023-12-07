import filters from "./filter.json"
import styles from "./Filters.module.scss"
import classNames from "classnames"

interface Item {
  id: number
  label: string
}

interface FiltersProps {
  filter: number | null
  setFilter: React.Dispatch<React.SetStateAction<number | null>>
}

const Filters = ({ filter, setFilter }: FiltersProps) => {
  function selectFilter(item: Item) {
    if (filter === item.id) return setFilter(null)
    return setFilter(item.id)
  }

  return (
    <div className={styles.filters}>
      {filters.map(item => (
        <button className={classNames({
          [styles.filters__filter]: true,
          [styles["filters__filter--active"]]: filter === item.id
        })}
          key={item.id} onClick={() => selectFilter(item)}>
          {item.label}
        </button>
      ))
      }
    </div >
  )
}

export default Filters
