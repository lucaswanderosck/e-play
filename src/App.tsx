import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Cart } from './components/Cart'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Rotas } from './routes'
import { store } from './store'

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="container">
          <Header />
        </div>
        <Rotas />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}
