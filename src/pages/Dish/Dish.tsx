import DefaultPage from 'components/DefaultPage/DefaultPage'
import Tags from 'components/Tags/Tags'
import menu from 'data/menu.json'
import NotFound from 'pages/NotFound/NotFound'
import { Route, Routes, useNavigate, useParams } from 'react-router-dom'
import styles from './Dish.module.scss'

const Dish = () => {
  const { id } = useParams()
  const dish = menu.find((item) => item.id === Number(id))
  const navigate = useNavigate()

  if (!dish) {
    return <NotFound />
  }

  return (
    <Routes>
      <Route path='*' element={<DefaultPage />}>
        <Route
          index
          element={
            <>
              <button className={styles.voltar} onClick={() => navigate(-1)}>
                {'< Voltar'}
              </button>
              <section className={styles.container}>
                <h1 className={styles.titulo}>{dish.title}</h1>
                <div className={styles.imagem}>
                  <img src={dish.photo} alt={dish.title} />
                </div>
                <div className={styles.conteudo}>
                  <p className={styles.conteudo__descricao}>
                    {dish.description}
                  </p>
                  <Tags {...dish} />
                </div>
              </section>
            </>
          }
        />
      </Route>
    </Routes>
  )
}

export default Dish
