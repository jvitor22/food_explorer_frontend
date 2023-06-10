import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.LIGHT_600};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  border: ${({ theme, isNew }) => isNew ? `.1rem dashed ${theme.COLORS.LIGHT_500}` : "none"};

  border-radius: .5rem;
  padding-right: 1.6rem;

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }

  > input {
    height: 3.2rem;
    width: 100%;
    padding: 1.0rem;

    border: none;
    background: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }

    &:focus {
      outline: none;
      box-shadow: none;
    }
  }

`