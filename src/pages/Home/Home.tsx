import nossaCasa from 'assets/nossa_casa.png'
import { useNavigate } from 'react-router-dom'
import themeStyles from 'styles/Theme.module.scss'
import { Dish } from 'types/Dish'
import menu from '../../data/menu.json'
import styles from './Home.module.scss'

const Home = () => {
  let recommendedDishes = [...menu]
  recommendedDishes = recommendedDishes
    .sort(() => 0.5 - Math.random())
    .splice(0, 3)

  const navigate = useNavigate()

  function redirectToDetails(dish: Dish) {
    navigate(`/prato/${dish.id}`, { state: { dish }, replace: true })
  }

  return (
    <section>
      <h3 className={themeStyles.titulo}>Recomendações da cozinha</h3>
      <div className={styles.recomendados}>
        {recommendedDishes.map((item) => (
          <div key={item.id} className={styles.recomendado}>
            <div className={styles.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button
              className={styles.recomendado__botao}
              onClick={() => redirectToDetails(item)}
            >
              Ver mais
            </button>
          </div>
        ))}
      </div>
      <h3 className={themeStyles.titulo}>Nossa casa</h3>
      <div className={styles.nossaCasa}>
        <img src={nossaCasa} alt='Casa Aluroni' />
        <div className={styles.nossaCasa__endereco}>
          Rua Vergueiro, 3185 <br /> Vila Mariana - SP
        </div>
      </div>
    </section>
  )
}

export default Home
