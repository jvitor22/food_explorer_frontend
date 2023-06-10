import { Container, Brand } from "./styles";

export function Footer() {
  return(
    <Container>
      <Brand>
        <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 0L25.9904 7.5V22.5L13 30L0.00961876 22.5V7.5L13 0Z" fill="#4D585E"/>
        </svg>
        <strong>food explorer</strong>
      </Brand>
      <p>© 2023 - Todos os direitos reservados.</p>

    </Container>
  )
}