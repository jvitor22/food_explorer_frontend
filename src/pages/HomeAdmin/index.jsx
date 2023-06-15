import { Container } from "./styles"
import { HeaderAdmin } from "../../components/HeaderAdmin"
import { Footer } from "../../components/Footer"

export function HomeAdmin() {
  return(
    <Container>
      <HeaderAdmin />
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