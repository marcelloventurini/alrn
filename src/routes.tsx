import DefaultPage from 'components/DefaultPage/DefaultPage'
import Footer from 'components/Footer/Footer'
import MainMenu from 'components/MainMenu/MainMenu'
import About from 'pages/About/About'
import Dish from 'pages/Dish/Dish'
import Home from 'pages/Home/Home'
import Menu from 'pages/Menu/Menu'
import NotFound from 'pages/NotFound/NotFound'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

const AppRouter = () => {
  return (
    <main className='container'>
      <Router>
        <MainMenu />
        <Routes>
          <Route path='/' element={<DefaultPage />}>
            <Route index element={<Home />} />
            <Route path='cardapio' element={<Menu />} />
            <Route path='sobre' element={<About />} />
          </Route>
          <Route path='prato/:id' element={<Dish />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  )
}

export default AppRouter
