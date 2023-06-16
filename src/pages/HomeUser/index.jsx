import { Container } from './styles'
import { HeaderUser } from '../../components/HeaderUser'
import { Footer } from '../../components/Footer'
import { CardUser } from '../../components/CardUser'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'

export function HomeUser() {
  const [plates, setPlates] = useState([])
  const [mainPlates, setMainPlates] = useState([])
  const [desserts, setDesserts] = useState([])
  const [drinks, setDrinks] = useState([])

  const [search, setSearch] = useState('')

  function handleInputChange(event) {
    const value = event.target.value
    setSearch(value)
  }

  function handleCategory() {
    const mainPlatesData = plates.filter(plate => plate.category === 'Refeição')
    const dessertsData = plates.filter(plate => plate.category === 'Sobremesa')
    const drinksData = plates.filter(plate => plate.category === 'Bebida')

    setMainPlates(mainPlatesData)
    setDesserts(dessertsData)
    setDrinks(drinksData)
  }

  useEffect(() => {
    async function fetchPlates() {
      const response = await api.get(`/plates?title=${search}`)
      setPlates(response.data)
    }

    fetchPlates()
  }, [search])

  useEffect(() => {
    handleCategory()
  }, [plates])

  return (
    <Container>
      <HeaderUser onInputChange={handleInputChange} />
      <main>
        <div className="folder">
          <img src="../../../src/assets/home-img.svg" alt="" />
          <div>
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </div>

        <div className="cards">
          <div className="mainPlatesCards">
            {mainPlates &&
              mainPlates.map(plate => <CardUser key={plate.id} data={plate} />)}
          </div>

          <div className="dessertsCards">
            {desserts &&
              desserts.map(plate => <CardUser key={plate.id} data={plate} />)}
          </div>

          <div className="drinksCards">
            {drinks &&
              drinks.map(plate => <CardUser key={plate.id} data={plate} />)}
          </div>
        </div>

      </main>
      <Footer />
    </Container>
  )
}
