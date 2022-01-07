import styled from 'styled-components';

export const Box = styled.div`
  background-color: #2B0174;
  width: 500px;
  height: 250px;
  border-radius: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  span {
    color: #ffffff;
    font-weight: 900;
    font-size: 1.2rem;
    display: flex;
    align-items: center;

    @media (max-width: 600px) {
      font-size: 1rem
  }

    svg {
      margin-left: 0.5rem;
    }
  }

  @media (max-width: 600px) {
    width: 340px;
    height: 200px;
  }
`;

export const ButtonBase = styled.div`
  margin-top: 2rem;
  font-size: 2rem;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  color: #2B0174;
`;
