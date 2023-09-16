import styled from 'styled-components';

export const IntroductionContainer = styled.div`
  width: 960px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #5b5c5d;
  margin-bottom: 150px;

  h2 {
    font-size: 30px;
  }
`;

export const IntroductionDiv = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  margin-top: 30px;

  div {
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h3 {
    font-size: 22px;
    margin-top: 25px;
    margin-bottom: 25px;
  }

  @media (max-width: 768px) {
    width: 330px;

    div {
      width: 330px;
      height: 280px;
    }

    h3 {
      margin-top: 15px;
      margin-bottom: 15px;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 500px;

    div {
      width: 500px;
      height: 250px;
    }

    h3 {
      margin-top: 15px;
      margin-bottom: 15px;
    }
  }

  @media (min-width: 1500px) {
    width: 1200px;

    div {
      width: 380px;
      height: 320px;
    }
  }
`;
