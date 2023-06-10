import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 1.5rem;

  width: 30.4rem;
  height: 46.2rem;
  padding: 2.4rem;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.COLORS.DARK_200};

  font-family: 'Roboto', sans-serif;
  color: ${({ theme }) => theme.COLORS.LIGHT_400};

  position: relative;

  .editIcon {
    position: absolute;
    right: 15.5%;
    top: 2%;

    border: none;
    background-color: transparent;
    font-size: 2.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }
 

  img {
    height: 17.6rem;
    width: 17.6rem;
  }

  h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
  }

  > span {
    font-weight: 400;
    font-size: 32px;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }  
`
