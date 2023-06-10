import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  padding: 9rem 10.8rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-family: 'Roboto', sans-serif;

  @media (max-width: 980px) {
    flex-direction: column;
  }
`

export const Logo = styled.div`
  width: 100%;
  font-weight: 700;
  font-size: 4.2rem;
  line-height: 4.9rem;

  display: flex;
  align-items: center;
  justify-content: center;

  > strong {
    white-space: nowrap;
  }

  > svg {
    margin-right: 2rem;
  }
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3.2rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  width: 67.6rem;
  padding: 6.4rem;
  border-radius: 16px;

  > div {
    width: 100%;

    p {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 100%;
      margin-bottom: 8px;
    }
  }

  > h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 3.2rem;
    line-height: 140%;
    white-space: nowrap;
  }

  > a {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
  
  @media (max-width: 980px) {
    max-width: 47.6rem;
  }
`
