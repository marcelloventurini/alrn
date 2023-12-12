import Tags from 'components/Tags/Tags'
import { useNavigate } from 'react-router-dom'
import { Dish } from 'types/Dish'
import styles from './Item.module.scss'

const Item = (props: Dish) => {
  const navigate = useNavigate()

  return (
    <div className={styles.item} onClick={() => navigate(`/prato/${props.id}`)}>
      <div className={styles.item__imagem}>
        <img src={props.photo} alt={props.title} />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
        <Tags {...props} />
      </div>
    </div>
  )
}

export default Item
