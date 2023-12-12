import styles from './Footer.module.scss'
import logo from 'assets/logo.svg'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={logo} alt="Logo Aluroni" />
    </footer>
  )
}

export default Footer
