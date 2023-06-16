import { Container } from './styles'
import { Button } from '../Button'
import { FiPlus, FiMinus } from "react-icons/fi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { api } from '../../services/api'
import { Link } from 'react-router-dom'

export function CardUser({ data }) {
  const imageSrc = api.defaults.baseURL + `/files/${data.image}`
  const linkToPlate = `/plate/${data.id}`
  const price = `R$ ${data.price}`

  return (
    <Container>
      <button className="likeIcon">
        <AiOutlineHeart />
      </button>
      <img src={imageSrc} alt={data.title} />
      <Link to={linkToPlate}>
        <h1>{data.title}</h1>
      </Link>
      <p>{data.description}</p>
      <span>{price}</span>
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
