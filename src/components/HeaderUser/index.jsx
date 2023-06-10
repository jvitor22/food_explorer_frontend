import { Container, Brand } from "./styles";
import { Input } from "../Input"
import { Button } from "../Button"
import { FiLogOut, FiSearch } from "react-icons/fi"
import { IoReceiptOutline } from "react-icons/io5"

export function HeaderUser() {
  return(
    <Container>
      <Brand to="/">
        <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 0L25.9904 7.5V22.5L13 30L0.00961876 22.5V7.5L13 0Z" fill="#065E7C"/>
        </svg>
        <strong>food explorer</strong>
      </Brand>

      <Input
        icon={FiSearch}
        placeholder="Busque por pratos ou ingredientes"
      />

      <div className="button">
        <Button 
          icon={IoReceiptOutline}
          title="Pedidos (0)"
        />
      </div>

      <FiLogOut />
    </Container>
  )
}