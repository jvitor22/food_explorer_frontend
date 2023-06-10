import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1.4rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};  
  border-radius: 5px;  

  > svg {
    margin-left: 1.2rem;
  }
  
  > input {
    height: 4.8rem;
    width: 100%;
    padding-left: 1.2rem;
    background: transparent;
    border: 0;    

    font-family: 'Roboto', sans-serif;    
    font-size: 1.6rem;
    line-height: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    &::placeholder {      
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }

    &:focus {
      outline: none;
      box-shadow: none;
    }
  } 
`