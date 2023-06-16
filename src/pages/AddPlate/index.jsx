import { Container } from './styles'
import { HeaderAdmin } from '../../components/HeaderAdmin'
import { Input } from '../../components/Input'
import { AddIngredient } from '../../components/AddIngredient'
import { Footer } from '../../components/Footer'
import { MdArrowBackIosNew } from 'react-icons/md'
import { FiUpload } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { api } from '../../services/api'

export function AddPlate() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('Selecione')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')

  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState('')

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, newIngredient])
    setNewIngredient('')
  }

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState =>
      prevState.filter(ingredient => ingredient !== deleted)
    )
  }

  async function handleAddPlate() {
    if (!title || !price) {
      return alert('Informe o nome e o preço do produto.')
    }

    if (!image) {
      return alert("Adicione uma imagem para o produto.")
    }

    if (category == 'Selecione' || '') {
      return alert('Selecione uma categoria para o produto.')
    }

    if (newIngredient || ingredients.length < 1) {
      return alert('Você não adicionou o ingrediente!')
    }

    const response = await api.post('plates', {
      title,
      description,
      category,
      price,
      ingredients
    })

    const id = response.data?.id

    if (id) {
      await api.patch(`plates/${response.data?.id}/image`, {
        image,
      }, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
    }

    alert(`${category} cadastrada com sucesso!`)
    handleBack()
  }

  return (
    <Container>
      <HeaderAdmin />
      <main>
        <button className="backButton" onClick={handleBack}>
          <MdArrowBackIosNew />
          Voltar
        </button>
        <h1>Adicionar prato</h1>

        <div className="inputs">
          <div>
            <p>Imagem do prato</p>
            <label htmlFor="image">
              <FiUpload />
              Selecione imagem
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={e => setImage(e.target.files[0])}
            />
          </div>

          <div>
            <p>Nome</p>
            <Input
              type="text"
              placeholder="Ex.: Salada Ceasar"
              onChange={e => setTitle(e.target.value)}
            />
          </div>

          <div>
            <p>Categoria</p>
            <select onChange={e => setCategory(e.target.value)}>
              <option value="Selecione">Selecione</option>
              <option value="Refeição">Refeições</option>
              <option value="Sobremesa">Sobremesas</option>
              <option value="Bebida">Bebidas</option>
            </select>
          </div>
        </div>

        <div className="ingredientsAndPrice">
          <div>
            <p>Ingredientes</p>
            <div className="ingredients">
              {ingredients.map((ingredient, index) => (
                <AddIngredient
                  key={String(index)}
                  value={ingredient}
                  onClick={() => handleRemoveIngredient(ingredient)}
                />
              ))}

              <AddIngredient
                isNew
                value={newIngredient}
                onChange={e => setNewIngredient(e.target.value)}
                onClick={handleAddIngredient}
              />
            </div>
          </div>

          <div>
            <p>Preço</p>
            <Input
              type="number"
              placeholder="R$ 00,00"
              onChange={e => setPrice(e.target.value)}
            />
          </div>
        </div>

        <div>
          <p>Descrição</p>
          <textarea
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição."
            onChange={e => setDescription(e.target.value)}
          />
        </div>

        <button className="saveButton" onClick={handleAddPlate}>
          Salvar alterações
        </button>
      </main>
      <Footer />
    </Container>
  )
}
