import { Container } from './styles'
import { AiOutlineEdit } from 'react-icons/ai'
import { api } from '../../services/api'
import { Link } from 'react-router-dom'

export function CardAdmin({ data }) {
  const imageSrc = api.defaults.baseURL + `/files/${data.image}`
  const linkToEdit = `/edit/${data.id}`
  const linkToPlate = `/plate-admin/${data.id}`
  const price = `R$ ${data.price}`

  return (
    <Container>
      <Link to={linkToEdit} className="editIcon">
        <AiOutlineEdit />
      </Link>
      <img src={imageSrc} alt={data.title} />
      <Link to={linkToPlate}>
        <h1>{data.title}</h1>
      </Link>
      <p>{data.description}</p>
      <span>{price}</span>
    </Container>
  )
}
