import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: #0067b8;
  color: white;
  gap: 20px;

  img {
    height: 50px;
  }

  @media (max-width: 768px) {
    img {
      height: 50px;
    }

    p {
      font-size: 12px;
    }
  }
`;
