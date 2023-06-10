import { Container, Logo, Form } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'
import { useState } from 'react'

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signIn } = useAuth()

  function handleSignIn() {
    if(!email || !password) {
      return alert("Preencha todos os campos.")
    }
    signIn({ email, password })
  }

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
        <h1>Faça login</h1>        
        <div>
          <p>E-mail</p>
          <Input 
            placeholder="exemplo@exemplo.com.br"
            type="text"
            onChange= {event => setEmail(event.target.value)}
          />
        </div>
        <div>
          <p>Senha</p>
          <Input 
            placeholder="No mínimo 6 caracteres"
            type="password"
            onChange= {event => setPassword(event.target.value)}
          />
        </div>
        <div>
          <Button title="Entrar" onClick={handleSignIn}/>
        </div>
        <Link to="register">Criar uma conta</Link>
      </Form>
    </Container>
  )
}
