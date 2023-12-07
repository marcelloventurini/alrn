import styles from "./Search.module.scss"
import {CgSearch} from "react-icons/cg"

interface SearchProps {
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

const Search = ({ search, setSearch }: SearchProps) => {
  return (
    <div className={styles.search}>
      <input value={search}
        onChange={event => setSearch(event.target.value)} />
      <CgSearch size={20} color="#4c4d5e" />
    </div>
  )
}

export default Search
