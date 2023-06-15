import { Container } from './styles'
import { HeaderUser } from '../../components/HeaderUser'
import { Button } from '../../components/Button'
import { Ingredients } from '../../components/Ingredients'
import { Footer } from '../../components/Footer'
import { MdArrowBackIosNew } from 'react-icons/md'
import { FiPlus, FiMinus } from 'react-icons/fi'
import { useParams, useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import { useState, useEffect } from 'react'

export function PlateUser() {
  const [data, setData] = useState(null)
  const params = useParams()
  const imageURL = data && `${api.defaults.baseURL}/files/${data.image}`;

  const [total, setTotal] = useState(1)  

  const navigate = useNavigate()

  function addOneToTotal() {
    setTotal(prevState => prevState + 1)  
  }

  function removeOneFromTotal() {
    if(total <= 1) {
      return
    }
    setTotal(prevState => prevState - 1)
  }

  function handleBack() {
    navigate(-1)
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
      <HeaderUser />
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
                <Button title="Incluir" price={data.price} />
              </div>
            </div>
          </div>
        </main>
      }
      <Footer />
    </Container>
  )
}
