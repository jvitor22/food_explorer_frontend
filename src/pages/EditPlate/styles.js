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

    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    overflow-y: auto;
    padding: 2.5rem 12.3rem;

    font-family: 'Roboto', sans-serif;

    a {
      display: flex;
      text-decoration: none;
      font-size: 24px;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};

      P {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        font-size: 24px;
        line-height: 140%;
        margin-top: -0.5rem;
      }
    }

    h1 {
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      font-size: 3.2rem;
      line-height: 140%;
    }

    p {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 100%;
      margin-bottom: 1.6rem;
    }
  }

  .inputs {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    gap: 3.2rem;

    input[type='file'] {
      display: none;
    }

    label {
      height: 4.8rem;
      background-color: ${({ theme }) => theme.COLORS.DARK_900};
      border-radius: 0.5rem;
      padding: 1.2rem 0;

      display: flex;
      justify-content: center;
      align-items: center;

      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      font-size: 1.4rem;
      line-height: 2.4rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};

      cursor: pointer;

      svg {
        margin-right: 0.8rem;
        font-size: 2rem;
      }
    }

    select {
      width: 100%;
      height: 4.8rem;
      border: none;
      border-radius: 0.5rem;
      background-color: ${({ theme }) => theme.COLORS.DARK_900};
      padding: 1.6rem;

      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 160%;
      font-family: 'Roboto', sans-serif;

      cursor: pointer;
    }
  }

  .ingredientsAndPrice {
    display: grid;
    grid-template-columns: 5fr 1fr;
    gap: 3.2rem;
  }

  .ingredients {
    display: flex;
    align-items: center;
    gap: 1.6rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    height: 4.8rem;
    padding: 0.4rem 0.8rem;
    border-radius: 0.5rem;
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  textarea {
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    width: 100%;
    height: 17.2rem;
    padding: 1.4rem;

    border: none;
    border-radius: 0.5rem;
    resize: none;

    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 100%;
    font-family: 'Roboto', sans-serif;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }

    &:focus {
      outline: none;
      box-shadow: none;
    }
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 3.2rem;
  }

  .saveButton,
  .deleteButton {
    height: 4.8rem;
    padding: 1.2rem 2.4rem;

    border-radius: 0.5rem;
    border: none;

    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.4rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  .saveButton {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
  }

  .deleteButton {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
  }
`
