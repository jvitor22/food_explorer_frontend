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

  main {
    grid-area: 'content';
    overflow-y: auto;
    padding: 16.4rem 12.4rem 4.8rem;

    font-family: 'Poppins', sans-serif;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  .folder {
    background-image: ${({ theme }) => theme.COLORS.GRADIENTS_200};
    width: 100%;
    height: 26rem;
    padding-right: 10rem;
    border-radius: 0.5rem;
    margin-bottom: 6.2rem;
    position: relative;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    > img {
      position: absolute;
      bottom: 0;
      left: -5.5rem;
    }

    > div {
      h1 {
        font-weight: 500;
        font-size: 4rem;
        line-height: 140%;
        margin-bottom: 0.8rem;
      }

      p {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 100%;
      }
    }
  }

  .cards {
    display: flex;
    flex-direction: column;
    gap: 4.8rem;
  }

  .sectionTitle {
    font-weight: 500;
    font-size: 32px;
    line-height: 140%;
    margin-bottom: 2.4rem;
  }

  .carousel {
    display: flex;
    position: relative;
  }

  .mainPlatesCards,
  .dessertsCards,
  .drinksCards {
    display: flex;
    gap: 2.7rem;
    overflow-x: auto;
    scroll-behavior: smooth;
  }

  .mainPlatesCards::-webkit-scrollbar,
  .dessertsCards::-webkit-scrollbar,
  .drinksCards::-webkit-scrollbar {
    display: none;
  }

  .leftButton,
  .rightButton {
    height: 46.2rem;
    width: 10rem;
    border: none;

    > svg {
      font-size: 4.5rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }

  .leftButton {
    position: absolute;
    background: linear-gradient(270deg, rgba(0, 10, 15, 0.09) 0%, #000a0f 100%);
  }

  .rightButton {
    position: absolute;
    right: 0;
    background: linear-gradient(90deg, rgba(0, 10, 15, 0.09) 0%, #000a0f 100%);
  }

  @media (max-width: 1312px) {
    .folder {
      img {
        width: 500px;
      }
    }
  }

  @media (max-width: 1212px) {
    .folder {
      height: 18rem;
      margin-top: -8rem;

      img {
        width: 350px;
      }

      > div {
        h1 {
          font-size: 2.5rem;
        }

        p {
          font-size: 1.2rem;
        }
      }
    }
  }

  @media (max-width: 892px) {
    main {
      padding: 16.4rem 6.4rem 4.8rem;
    }

    .folder {
      height: 14rem;
      padding-right: 4rem;

      img {
        width: 300px;
      }

      > div {
        h1 {
          font-size: 2rem;
        }

        p {
          font-size: 1.2rem;
        }
      }
    }
  }

  @media (max-width: 760px) {
    grid-template-rows: 23rem auto 7.7rem;
    
    .folder {
      height: 14rem;
      padding-right: 2rem;

      img {
        width: 250px;
      }

      > div {
        p {
          font-size: 1.0rem;
        }
      }
    }
  }
`
