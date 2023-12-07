import { useState } from "react"
import styles from "./Ordinator.module.scss"
import options from "./options.json"
import classNames from "classnames"
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md"

interface OrdinatorProps {
  ordinator: string
  setOrdinator: React.Dispatch<React.SetStateAction<string>>
}

const Ordinator = ({ ordinator, setOrdinator }: OrdinatorProps) => {
  const [open, setOpen] = useState(false)
  const ordinatorName = ordinator
    && options.find(option => option.value === ordinator)?.nome

  return (
    <button className={classNames({
      [styles.ordinator]: true,
      [styles["ordinator--active"]]: ordinator !== ""
    })}
      onClick={() => setOpen(!open)}
      onBlur={() => setOpen(false)}
    >
      <span>{ordinatorName || "Ordernar Por"}</span>
      {open
        ? <MdKeyboardArrowUp size={20} />
        : <MdKeyboardArrowDown size={20} />}
      <div className={classNames({
        [styles.ordinator__options]: true,
        [styles["ordinator__options--active"]]: open
      })}>
        {options.map(option => (
          <div className={styles.ordinator__option}
            key={option.value}
            onClick={() => setOrdinator(option.value)}>
            {option.nome}
          </div>
        ))}
      </div>
    </button>
  )
}

export default Ordinator
