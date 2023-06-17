import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;

  min-width: 30.4rem;
  max-width: 30.4rem;
  height: 46.2rem;
  padding: 2.4rem;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.COLORS.DARK_200};

  font-family: 'Roboto', sans-serif;
  color: ${({ theme }) => theme.COLORS.LIGHT_400};

  position: relative;

  .toLikeIcon {
    position: absolute;
    right: 15.5%;
    top: 1%;

    border: none;
    background-color: transparent;
    font-size: 3rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  .toUnlikeIcon {
    position: absolute;
    right: 15.5%;
    top: 1%;

    border: none;
    background-color: transparent;
    font-size: 3rem;
    color: ${({ theme }) => theme.COLORS.TOMATO_300};
  }

  img {
    height: 17.6rem;
    width: 17.6rem;
    border-radius: 50%;
  }

  h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    text-align: center;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    height: 4.4rem;
    overflow: hidden;
    text-align: center;
  }

  > span {
    font-weight: 400;
    font-size: 32px;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }

  .addToCart {
    display: flex;
    gap: 1.6rem;
    width: fit-content;
  }

  .quantity {
    display: flex;
    align-items: center;
    gap: 14px;

    > button {
      background-color: transparent;
      border: none;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};

      svg {
        width: 2.4rem;
        height: 2.4rem;
      }
    }

    span {
      font-weight: 700;
      font-size: 20px;
      line-height: 160%;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
  }
`
