import { Container } from './styles'
import { HeaderAdmin } from '../../components/HeaderAdmin'
import { Button } from '../../components/Button'
import { Ingredients } from '../../components/Ingredients'
import { Footer } from '../../components/Footer'
import { MdArrowBackIosNew } from 'react-icons/md'
import { useParams, useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import { useState, useEffect } from 'react'

export function PlateAdmin() {
  const [data, setData] = useState(null)
  const params = useParams()
  const imageURL = data && `${api.defaults.baseURL}/files/${data.image}`;

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  function navigateToEdit(id) {
    navigate(`/edit/${id}`)
  }

  useEffect(() => {
    async function fetchPlate() {
      const response = await api.get(`/plates/${params.id}`)
      setData(response.data)
    }

    fetchPlate()
  }, [])

  return (
    <Container>
      <HeaderAdmin />
      {
        data &&
        <main>
          <button className="backButton" onClick={handleBack}>
            <MdArrowBackIosNew />
            Voltar
          </button>

          <div>
            <img src={imageURL} alt="Imagem do produto" />
            <div className="info">
              <h1>{data.title}</h1>
              <p>{data.description}</p>
              {
                data.ingredients &&
                <div className="ingredients">
                  {
                    data.ingredients.map(ingredient => (
                      <Ingredients
                        key={String(ingredient.id)}
                        title={ingredient.name}
                      />
                    ))
                  }                  
                </div>
              }
                <Button 
                  className="button"
                  title="Editar prato"
                  onClick={() => navigateToEdit(data.id)}  
                />
            </div>
          </div>
        </main>
      }
      <Footer />
    </Container>
  )
}
