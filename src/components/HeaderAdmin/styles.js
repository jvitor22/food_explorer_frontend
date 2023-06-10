import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.header`
  grid-area: 'header';

  width: 100%;
  height: 10.4rem;
  padding: 2.4rem 12.3rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  display: flex;
  justify-content: space-between;
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
`

export const Brand = styled(Link)`
  display: flex;
  gap: 1rem;

  font-family: 'Roboto', sans-serif;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-size: 2.4rem;
  font-weight: 700;

  > div {
    display: flex;
    flex-direction: column;

    strong {
      white-space: nowrap;
    }

    span {
      font-weight: 400;
      font-size: 12px;
      line-height: 160%;
      color: ${({ theme }) => theme.COLORS.CAKE_200};
      margin-top: -8px;
      text-align: end;
    }
  }
`
