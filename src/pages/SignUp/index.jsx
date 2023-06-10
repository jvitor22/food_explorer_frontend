import { Container, Logo, Form } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'

export function SignUp() {
  return (
    <Container>
      <Logo>
        <svg
          width="49"
          height="49"
          viewBox="0 0 26 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 0L25.9904 7.5V22.5L13 30L0.00961876 22.5V7.5L13 0Z"
            fill="#065E7C"
          />
        </svg>
        <strong>food explorer</strong>
      </Logo>

      <Form>
        <h1>Crie sua conta</h1>
        <div>
          <p>Seu nome</p>
          <Input 
            placeholder="Maria da Silva"
          />
        </div>
        <div>
          <p>E-mail</p>
          <Input 
            placeholder="exemplo@exemplo.com.br"
          />
        </div>
        <div>
          <p>Senha</p>
          <Input 
            placeholder="No mínimo 6 caracteres"
          />
        </div>
        <div>
          <Button title="Criar conta" />
        </div>
        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </Container>
  )
}
