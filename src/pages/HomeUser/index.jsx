import { Container } from './styles'
import { HeaderUser } from '../../components/HeaderUser'
import { Footer } from '../../components/Footer'
import { CardUser } from '../../components/CardUser'
import { useEffect, useState, useRef } from 'react'
import { api } from '../../services/api'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

export function HomeUser() {
  const [plates, setPlates] = useState([])
  const [mainPlates, setMainPlates] = useState([])
  const [desserts, setDesserts] = useState([])
  const [drinks, setDrinks] = useState([])

  const [search, setSearch] = useState('')

  const mainPlatesCarousel = useRef(null)
  const dessertsCarousel = useRef(null)
  const drinksCarousel = useRef(null)

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

  function handleMainPlatesLeft (e) {
    e.preventDefault()
    mainPlatesCarousel.current.scrollLeft -= mainPlatesCarousel.current.offsetWidth
  }

  function handleMainPlatesRight (e) {
    e.preventDefault()
    mainPlatesCarousel.current.scrollLeft += mainPlatesCarousel.current.offsetWidth
  }
  
  function handleDessertsLeft(e) {
    e.preventDefault()
    dessertsCarousel.current.scrollLeft -= dessertsCarousel.current.offsetWidth
  }

  function handleDessertsRight(e) {
    e.preventDefault()
    dessertsCarousel.current.scrollLeft += dessertsCarousel.current.offsetWidth
  }
  
  function handleDrinksLeft(e) {
    e.preventDefault()
    drinksCarousel.current.scrollLeft -= drinksCarousel.current.offsetWidth
  }

  function handleDrinksRight(e) {
    e.preventDefault()
    drinksCarousel.current.scrollLeft += drinksCarousel.current.offsetWidth
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
        <section>
            <h1 className="sectionTitle">Refeições</h1>
            <div className="carousel" >
              <div className="mainPlatesCards" ref={mainPlatesCarousel}>
                {mainPlates &&
                  mainPlates.map(plate => (
                    <CardUser key={plate.id} data={plate} />
                  ))}
              </div>
              <button className="leftButton" onClick={handleMainPlatesLeft}>
                <FiChevronLeft />
              </button>
              <button className="rightButton" onClick={handleMainPlatesRight}>
                <FiChevronRight />
              </button>
            </div>
          </section>

          <section>
            <h1 className="sectionTitle">Sobremesas</h1>
            <div className="carousel" >
              <div className="dessertsCards" ref={dessertsCarousel}>
                {desserts &&
                  desserts.map(plate => (
                    <CardUser key={plate.id} data={plate} />
                  ))}
              </div>
              <button className="leftButton" onClick={handleDessertsLeft}>
                <FiChevronLeft />
              </button>
              <button className="rightButton" onClick={handleDessertsRight}>
                <FiChevronRight />
              </button>
            </div>
          </section>

          <section>
            <h1 className="sectionTitle">Bebidas</h1>
            <div className="carousel" >
              <div className="drinksCards" ref={drinksCarousel}>
                {drinks &&
                  drinks.map(plate => (
                    <CardUser key={plate.id} data={plate} />
                  ))}
              </div>
              <button className="leftButton" onClick={handleDrinksLeft}>
                <FiChevronLeft />
              </button>
              <button className="rightButton" onClick={handleDrinksRight}>
                <FiChevronRight />
              </button>
            </div>
          </section>
        </div>

      </main>
      <Footer />
    </Container>
  )
}
