import { Container } from './styles'
import { AiOutlineEdit } from "react-icons/ai";


export function CardAdmin() {
  return (
    <Container>
      <button className="editIcon">
        <AiOutlineEdit />
      </button>
      <img src="../../../src/assets/3.png" alt="" />
      <h1>Spaguetti Gambe</h1>
      <p>Massa fresca com camarões e pesto.</p>
      <span>R$ 79,90</span>      
    </Container>
  )
}
