import classNames from 'classnames'
import styles from './Tags.module.scss'
import { Dish } from 'types/Dish'

const Tags = ({ category, size, serving, price }: Dish) => {
  return (
    <div className={styles.tags__tags}>
      <div
        className={classNames({
          [styles.tags__tipo]: true,
          [styles[`tags__tipo__${category.label.toLowerCase()}`]]: true,
        })}
      >
        {category.label}
      </div>
      <div className={styles.tags__porcao}>{size}g</div>
      <div className={styles.tags__qtdpessoas}>
        Serve {serving} pessoa{serving === 1 ? '' : 's'}
      </div>
      <div className={styles.tags__valor}>R$ {price},00</div>
    </div>
  )
}

export default Tags
