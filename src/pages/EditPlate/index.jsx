import { Container } from './styles'
import { HeaderAdmin } from '../../components/HeaderAdmin'
import { Input } from '../../components/Input'
import { AddIngredient } from '../../components/AddIngredient'
import { Footer } from '../../components/Footer'
import { MdArrowBackIosNew } from 'react-icons/md'
import { FiUpload } from 'react-icons/fi'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'

export function EditPlate() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('Selecione')
  const [price, setPrice] = useState('')

  const [newImage, setNewImage] = useState(null)

  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState('')

  const params = useParams()
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

  async function handleEditPlate() {
    if (!title || !price) {
      return alert('Informe o nome e o preço do produto.')
    }

    if (category == 'Selecione' || '') {
      return alert('Selecione uma categoria para o produto.')
    }

    if (newIngredient || ingredients.length < 1) {
      return alert('Você não adicionou o ingrediente!')
    }

    await api.put(`/plates/${params.id}`, {
      title,
      description,
      category,
      price,
      ingredients
    })

    if (newImage) {
      console.log(newImage)
      await api.patch(
        `plates/${params.id}/image`,
        {
          image: newImage
        },
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      )
    }

    alert(`${category} atualizada com sucesso!`)
    handleBack()
  }

  async function handleRemovePlate() {
    const isConfirm = confirm('Tem certeza que deseja remover?')

    if (isConfirm) {
      await api.delete(`/plates/${params.id}`)
      navigate("/")
    }
  }

  useEffect(() => {
    async function fetchPlate() {
      const response = await api.get(`/plates/${params.id}`)

      const { title, description, category, image, price, ingredients } =
        response.data
      setTitle(title)
      setDescription(description)
      setCategory(category)
      setPrice(price)
      setIngredients(ingredients.map(ingredient => ingredient.name))
    }

    fetchPlate()
  }, [])

  return (
    <Container>
      <HeaderAdmin />
      <main>
        <button className="backButton" onClick={handleBack}>
          <MdArrowBackIosNew />
          Voltar
        </button>
        <h1>Editar prato</h1>

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
              onChange={e => setNewImage(e.target.files[0])}
            />
          </div>

          <div>
            <p>Nome</p>
            <Input
              type="text"
              placeholder="Ex.: Salada Ceasar"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </div>

          <div>
            <p>Categoria</p>
            <select
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
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
            <p>Novo preço</p>
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
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>

        <div className="buttons">
          <button className="deleteButton" onClick={handleRemovePlate}>
            Excluir prato
          </button>
          <button className="saveButton" onClick={handleEditPlate}>
            Salvar alterações
          </button>
        </div>
      </main>
      <Footer />
    </Container>
  )
}
