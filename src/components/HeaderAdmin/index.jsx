import { Container, Brand } from "./styles";
import { Input } from "../Input"
import { Button } from "../Button"
import { FiLogOut, FiSearch } from "react-icons/fi"
import { Link } from 'react-router-dom'

export function HeaderAdmin() {
  return(
    <Container>
      <Brand to="/">
        <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 0L25.9904 7.5V22.5L13 30L0.00961876 22.5V7.5L13 0Z" fill="#065E7C"/>
        </svg>
        <div>
          <strong>food explorer</strong>
          <span>admin</span>
        </div>
      </Brand>

      <Input
        icon={FiSearch}
        placeholder="Busque por pratos ou ingredientes"
      />

      <Link to="/add" className="button">
        <Button
          title="Novo prato"
        />
      </Link >

      <FiLogOut />
    </Container>
  )
}