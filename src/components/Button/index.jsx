import { Container } from "./styles";

export function Button({ title, icon: Icon, price: price, ...rest}) {
  return(
    <Container 
    type="button"    
    {...rest}
    >
      {Icon && <Icon />}
      {price ? `${title} - R$ ${price}` : title }
    </Container>
  )
}