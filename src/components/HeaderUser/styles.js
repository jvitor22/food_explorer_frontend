import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.header`
  grid-area: 'header';

  width: 100%;
  height: 10.4rem;
  padding: 2.4rem 12.3rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  display: flex;
  align-items: center;
  gap: 3.2rem;

  > button {
    border: none;
    background-color: transparent;

    svg {
      font-size: 2.6rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }

  @media (max-width: 892px) {
    padding: 2.4rem 6.4rem;
  }

  @media (max-width: 760px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 22rem;
  }
`

export const Brand = styled(Link)`
  display: flex;
  gap: 1rem;

  font-family: 'Roboto', sans-serif;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-size: 2.4rem;
  font-weight: 700;

  > strong {
    white-space: nowrap;
  }
`
