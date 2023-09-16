import styled from 'styled-components';

export const PolicyContainer = styled.div`
  width: 960px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #5b5c5d;
  margin-bottom: 150px;

  h2 {
    font-size: 30px;
    margin-bottom: 50px;
  }

  h3 {
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    width: 88%;

    h3 {
      font-size: 18px;
      margin-top: 30px;
      margin-bottom: 30px;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 500px;
  }

  @media (min-width: 1500px) {
    width: 1200px;
  }
`;
