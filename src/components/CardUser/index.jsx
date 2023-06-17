import { Container } from './styles'
import { Button } from '../Button'
import { FiPlus, FiMinus } from 'react-icons/fi'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { api } from '../../services/api'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export function CardUser({ data }) {
  const imageURL = data && `${api.defaults.baseURL}/files/${data.image}`
  const linkToPlate = `/plate/${data.id}`
  const price = `R$ ${data.price}`
  const [total, setTotal] = useState(1)

  const [className, setClassName] = useState('toLikeIcon')
  const [likeIcon, setLikeIcon] = useState(<AiOutlineHeart />)

  function handleLike() {
    if (className === 'toLikeIcon') {
      setClassName('toUnlikeIcon')
      setLikeIcon(<AiFillHeart />)
    } else {
      setClassName('toLikeIcon')
      setLikeIcon(<AiOutlineHeart />)
    }
  }

  function addOneToTotal() {
    setTotal(prevState => prevState + 1)
  }

  function removeOneFromTotal() {
    if (total <= 1) {
      return
    }
    setTotal(prevState => prevState - 1)
  }

  return (
    <Container>
      <button className={className} onClick={handleLike}>
        {likeIcon}
      </button>
      <img src={imageURL} alt={data.title} />
      <Link to={linkToPlate}>
        <h1>{data.title}</h1>
      </Link>
      <p>{data.description}</p>
      <span>{price}</span>
      <div className="addToCart">
        <div className="quantity">
          <button onClick={removeOneFromTotal}>
            <FiMinus />
          </button>
          <span>{total}</span>
          <button onClick={addOneToTotal}>
            <FiPlus />
          </button>
        </div>
        <Button title="Incluir" />
      </div>
    </Container>
  )
}
