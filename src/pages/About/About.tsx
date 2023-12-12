import house from 'assets/about/casa.png'
import massa1 from 'assets/about/massa1.png'
import massa2 from 'assets/about/massa2.png'
import themeStyles from 'styles/Theme.module.scss'
import styles from './About.module.scss'

const images = [massa1, massa2]

const About = () => {
  return (
    <section>
      <h3 className={themeStyles.titulo}>Sobre</h3>
      <div className={styles.sobreNos}>
        <img src={house} alt='Casa Aluroni' />
        <div className={styles.sobreNos__texto}>
          <p>
            Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa
            Italiana Caseira mais saborosa e sofisticada de São Paulo! Prezamos
            pelos ingredientes tradicionais da culinária Italiana, frescos e de
            excelente qualidade para que sua experiência seja ainda mais
            intensa!
          </p>
          <p>
            Também possuímos uma cardápio de carnes com muitas opções de acordo
            com o seu gosto!
          </p>
          <p>
            Para acompanhar as massas italianas, Aluroni possui uma reserva de
            vinhos especiais, que harmonizam perfeitamente com o seu parto, seja
            carne ou massa!
          </p>
        </div>
      </div>
      <div className={styles.imagens}>
        {images.map((image, index) => (
          <div key={index} className={styles.imagem__imagens}>
            <img src={image} alt='Imagem de massa' />
          </div>
        ))}
      </div>
    </section>
  )
}

export default About
