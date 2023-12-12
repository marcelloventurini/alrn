import notFoundSvg from 'assets/not_found.svg'
import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'
import themeStyles from 'styles/Theme.module.scss'
import styles from './NotFound.module.scss'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div
      className={classNames({
        [styles.container]: true,
        [themeStyles.container]: true,
      })}
    >
      <div className={styles.voltar}>
        <button onClick={() => navigate(-1)}>{'< Voltar'}</button>
      </div>
      <img src={notFoundSvg} alt='Imagem página não encontrada' />
    </div>
  )
}

export default NotFound
