import styled from "styled-components";

export const Container = styled.button`
  height: 4.8rem;
  width: 100%;
  padding: 1.2rem 2.4rem;
  border: 0;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  
  font-family: 'Poppins', sans-serif;    
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  white-space: nowrap;



  display: flex;  
  justify-content: center;

  > svg {
    height: 2rem;
    width: 2rem;
    margin-right: .8rem;
  }

  &:disabled {
    opacity: 0.5;
  }
`