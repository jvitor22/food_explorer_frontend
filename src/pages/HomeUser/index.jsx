import { Container } from "./styles"
import { HeaderUser } from "../../components/HeaderUser"
import { Footer } from "../../components/Footer"
import { CardUser } from "../../components/CardUser"
import { Link } from 'react-router-dom'

export function HomeUser() {
  return(
    <Container>
      <HeaderUser />
      <main>
        <div className="folder">
          <img src="../../../src/assets/home-img.svg" alt="" />
          <div>
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </div>

        <div className="cards">
          {/* falta fazer o carrossel */}
        </div>
      </main>
      <Footer />
    </Container>
  )
}