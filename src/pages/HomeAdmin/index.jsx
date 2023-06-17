import { Container } from './styles'
import { HeaderAdmin } from '../../components/HeaderAdmin'
import { Footer } from '../../components/Footer'
import { CardAdmin } from '../../components/CardAdmin'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'

export function HomeAdmin() {
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
      const response = await api.get(`/plates?title=${search}&ingredients=${search}`)
      setPlates(response.data)
    }

    fetchPlates()
  }, [search])

  useEffect(() => {
    handleCategory()
  }, [plates])

  return (
    <Container>
      <HeaderAdmin onInputChange={handleInputChange} />
      <main>
        <div className="folder">
          <img src="../../../src/assets/home-img.svg" alt="" />
          <div>
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </div>

        <div className="cards">
          <section>
            <h1 className='sectionTitle'>Refeições</h1>
            <div className="mainPlatesCards">
              {mainPlates &&
                mainPlates.map(plate => <CardAdmin key={plate.id} data={plate} />)}
            </div>
          </section>

          <section>
            <h1 className='sectionTitle'>Sobremesas</h1>
            <div className="dessertsCards">
              {desserts &&
                desserts.map(plate => <CardAdmin key={plate.id} data={plate} />)}
            </div>
          </section>

          <section>
            <h1 className='sectionTitle'>Bebidas</h1>
            <div className="drinksCards">
              {drinks &&
                drinks.map(plate => <CardAdmin key={plate.id} data={plate} />)}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </Container>
  )
}
