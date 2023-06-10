import { Container } from './styles'
import { HeaderAdmin } from '../../components/HeaderAdmin'
import { Input } from '../../components/Input'
import { AddIngredient } from '../../components/AddIngredient'
import { Footer } from '../../components/Footer'
import { MdArrowBackIosNew } from 'react-icons/md'
import { FiUpload } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export function AddPlate() {
  return (
    <Container>
      <HeaderAdmin />
      <main>
        <Link to="/">
          <MdArrowBackIosNew />
          <p>Voltar</p>
        </Link>
        <h1>Adicionar prato</h1>

        <div className="inputs">
          <div>
            <p>Imagem do prato</p>
            <label htmlFor="image">
              <FiUpload />
              Selecione imagem
            </label>
            <input type="file" id="image" accept="image/*" />
          </div>

          <div>
            <p>Nome</p>
            <Input type="text" placeholder="Ex.: Salada Ceasar" />
          </div>

          <div>
            <p>Categoria</p>
            <select>
              <option value="valor1">Refeição</option>
              <option value="valor2">Sobremesa</option>
              <option value="valor3">Bebida</option>
            </select>
          </div>
        </div>

        <div className="ingredientsAndPrice">
          <div>
            <p>Ingredientes</p>
            <div className="ingredients">
              <AddIngredient value="alface" />
              <AddIngredient value="cebola" />
              <AddIngredient value="pão naan" />
              <AddIngredient isNew placeholder="Adicionar" />
            </div>
          </div>

          <div>
            <p>Preço</p>
            <Input type="number" placeholder="R$ 00,00" />
          </div>
        </div>

        <div>
          <p>Descrição</p>
          <textarea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição." />
        </div>

        <button className="saveButton">Salvar alterações</button>
      </main>
      <Footer />
    </Container>
  )
}
