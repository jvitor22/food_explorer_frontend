import styled from 'styled-components'

export const Container = styled.footer`
  grid-area: 'footer';

  width: 100%;
  height: 7.7rem;
  padding: 2.4rem 12.3rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  display: flex;
  justify-content: space-between;
  align-items: center;

  > p {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
  }
`

export const Brand = styled.div`
  display: flex;
  gap: 1rem;

  font-family: 'Roboto', sans-serif;
  color: ${({ theme }) => theme.COLORS.LIGHT_700};
  font-size: 2.4rem;
  font-weight: 700;

  > strong {
    white-space: nowrap;
  }
`
