import styled from 'styled-components'

export const Container = styled.span`
  padding: 4px 9px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};

  font-family: 'Poppins';
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  display: flex;
  align-items: center;
`
