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
    border-radius: .5rem;
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
        font-size: 4.0rem;
        line-height: 140%;
        margin-bottom: .8rem;
      }

      p {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 100%;
      }
    }
  }
`