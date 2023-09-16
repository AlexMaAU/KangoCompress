import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 70px;
  background-color: #0067b8;
  color: white;
  margin-bottom: 20px;
`;

export const LogoImg = styled.img`
  cursor: pointer;
`;

export const HeaderBox = styled.div`
  width: 960px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    height: 70px;
  }

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 500px;
  }

  @media (min-width: 1500px) {
    width: 1200px;
  }
`;
