import styled from 'styled-components';

export const PageTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 100%;
  }
`;

export const PageTitleSection = styled.h1`
  font-size: 30px;
  color: #5b5c5d;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export const PageSubTitleSection = styled.h2`
  font-size: 20px;
  color: #5b5c5d;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
