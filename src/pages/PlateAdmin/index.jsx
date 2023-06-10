import { Container } from './styles'
import { HeaderAdmin } from '../../components/HeaderAdmin'
import { Button } from '../../components/Button'
import { Ingredients } from '../../components/Ingredients'
import { Footer } from '../../components/Footer'
import { MdArrowBackIosNew } from 'react-icons/md'
import { FiPlus, FiMinus } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export function PlateAdmin() {
  return (
    <Container>
      <HeaderAdmin />
      <main>
        <Link to="/">
          <MdArrowBackIosNew />
          <p>Voltar</p>
        </Link>

        <div>
          <img src="../../../src/assets/4.png" alt="" />
          <div className="info">
            <h1>Salada Ravanello</h1>
            <p>
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
              O pão naan dá um toque especial.
            </p>
            <div className="ingredients">
              <Ingredients title="alface" />
              <Ingredients title="cebola" />
              <Ingredients title="pão naan" />
              <Ingredients title="pepino" />
              <Ingredients title="rabanete" />
              <Ingredients title="tomate" />
            </div>
            <Link to="/edit/:id" className="button">
              <Button title="Editar prato" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </Container>
  )
}
