import { useEffect, useState } from "react"
import Item from "./Item/Item"
import menu from "../../../data/menu.json"
import styles from "./Items.module.scss"
import { Menu } from "types/Dish"

interface ItemsProps {
  search: string
  filter: number | null
  ordinator: string
}

const Items = ({ search, filter, ordinator }: ItemsProps) => {
  const [list, setList] = useState(menu)

  function testSearch(title: string) {
    const regex = new RegExp(search, 'i')
    return regex.test(title)
  }

  function testFilter(id: number) {
    if (filter !== null) return filter === id
    return true
  }

  function order(newList: Menu) {
    switch (ordinator) {
      case 'porcao':
        return newList.sort((a, b) => a.size > b.size ? 1 : -1)
      case 'qtd_pessoas':
        return newList.sort((a, b) => a.serving > b.serving ? 1 : -1)
      case 'preco':
        return newList.sort((a, b) => a.price > b.price ? 1 : -1)
      default:
        return newList
    }
  }

  useEffect(() => {
    const newList = menu.filter(item => testSearch(item.title) && testFilter(item.category.id))

    setList(order(newList))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, filter, ordinator])

  return (
    <div className={styles.items}>
      {list.map(item => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  )
}

export default Items
