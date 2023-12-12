import { Outlet } from 'react-router-dom'
import styles from './DefaultPage.module.scss'
import themeStyles from 'styles/Theme.module.scss'

const DefaultPage = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa da massa.</div>
      </header>
      <div className={themeStyles.container}>
        {/* o Outlet funciona como o 'children' no react-router-dom */}
        <Outlet />
      </div>
    </>
  )
}

export default DefaultPage
