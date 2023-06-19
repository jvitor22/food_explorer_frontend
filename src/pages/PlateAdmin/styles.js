import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: grid;
  grid-template-rows: 10.4rem auto 7.7rem;
  grid-template-areas:
    'header'
    'content'
    'footer';

  > main {
    grid-area: 'content';
    overflow-y: auto;
    padding: 2.5rem 12.3rem;

    font-family: 'Poppins', sans-serif;

    .backButton {
      display: flex;
      align-items: center;
      background-color: transparent;
      border: none;
      text-decoration: none;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-size: 24px;
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      line-height: 140%;     
    }

    > div:nth-child(2) {
      display: flex;
      align-items: center;
      gap: 4.8rem;
      margin-top: 4.2rem;

      img {
        height: 39rem;
        width: 39rem;
        border-radius: 50%;
      }
    }

    .info {
      display: flex;
      flex-direction: column;
      gap: 2.4rem;
      justify-content: flex-start;

      h1 {
        font-weight: 500;
        font-size: 4rem;
        line-height: 140%;
      }

      p {
        font-weight: 400;
        font-size: 2.4rem;
        line-height: 140%;
      }

      .ingredients {
        display: flex;
        gap: 1.2rem;
        flex-wrap: wrap;
      }
    }

    .button {
      display: flex;
      gap: 3.3rem;
      width: 13rem;
    }

    .quantity {
      display: flex;
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
        font-size: 3.2rem;
      }
    }
  }

  @media (max-width: 1050px) {
    > main .info h1 {
      font-size: 3rem;
    }

    > main .info p {
      font-size: 2rem;
    }
  }

  @media (max-width: 892px) {
    > main {
      > div:nth-child(2) {
        img {
          height: 26.4rem;
          width: 26.4rem;
        }
      }
    }
  }

  @media (max-width: 760px) {
    grid-template-rows: 23rem auto 7.7rem;

    > main {
      padding: 2.5rem 6.4rem;

      .backButton {
        font-size: 1.8rem;
      }

      > div:nth-child(2) {
        flex-direction: column;
        text-align: center;
      }

      .button,
      .ingredients {
        margin: 0 auto;
      }
    }
  }
`
