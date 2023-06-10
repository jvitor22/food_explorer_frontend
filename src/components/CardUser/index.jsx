import { Container } from './styles'
import { Button } from '../Button'
import { FiPlus, FiMinus } from "react-icons/fi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";


export function CardUser() {
  return (
    <Container>
      <button className="likeIcon">
        <AiOutlineHeart />
      </button>
      <img src="../../../src/assets/3.png" alt="" />
      <h1>Spaguetti Gambe</h1>
      <p>Massa fresca com camarões e pesto.</p>
      <span>R$ 79,90</span>
      <div className="addToCart">
        <div className="quantity">
          <button>
            <FiMinus />
          </button>
          <span>01</span>
          <button>
            <FiPlus />
          </button>
        </div>
        <Button title="Incluir" />
      </div>
    </Container>
  )
}
