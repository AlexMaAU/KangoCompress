import styled from 'styled-components';
import Img from 'react-cool-img';

interface DropZoneBoxProps {
  dragging: string;
}

export const DropZoneSection = styled.section`
  width: 960px;
  margin-bottom: 100px;
  h4 {
    font-size: 22px;
    color: #5b5c5d;
    margin-top: 50px;
    margin-bottom: 30px;
  }
  ul {
    list-style: none;
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

export const DropZoneBox = styled.div`
  cursor: pointer;
  width: 100%;
  height: 300px;
  font-size: 20px;
  border: 0 solid #c1c1c1;
  box-shadow: #c1c1c1 0 0 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  padding: 15px;
`;

export const DropZoneInnerBox = styled.div<DropZoneBoxProps>`
  cursor: pointer;
  width: 100%;
  height: 100%;
  font-size: 20px;
  border: 2px dashed #5e9bca;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: aliceblue;
  background-color: ${(props) => (props.dragging === 'true' ? '#d0e7fd' : 'aliceblue')};

  &:hover {
    background-color: #d0e7fd;
  }

  p {
    font-size: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
    color: #7b7b7b;

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }

  div {
    background-color: #88c3fe;
    width: 250px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fbfdff;
    font-weight: bold;
    border-radius: 5px;
    margin-top: 20px;
    margin-bottom: 20px;
    transition: all 0.3s;
    &:hover {
      background-color: #0462a6;
      color: white;
    }
  }
`;

export const FileBox = styled.div`
  height: 150px;
  background-color: aliceblue;
  display: flex;
  align-items: center;
  gap: 30px;
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 320px;
    margin-bottom: 20px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    flex-direction: column;
    height: 320px;
    margin-bottom: 20px;
  }
`;

export const PreviewImage = styled(Img)`
  width: 180px;
  height: 150px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 100%;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const DownloadDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
`;

export const DownloadLink = styled.a`
  text-decoration: none;
  font-weight: bold;
  color: #0462a6;
  transition: all 0.3s;
  &:hover {
    color: #0792f5;
  }
`;

export const DownloadSection = styled.div`
  width: 100%;
  padding: 40px 40px;
  border: 3px dashed #c1c1c1;
  border-radius: 15px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    padding: 20px 20px;
  }
`;

export const FreshButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

export const FreshButton = styled.button`
  cursor: pointer;
  width: 600px;
  height: 80px;
  background-color: #0462a6;
  border-radius: 15px;
  color: white;
  border: 0;
  font-size: 22px;
  margin-top: 20px;
  margin-bottom: 20px;
  transition: all 0.3s;
  &:hover {
    background-color: #0792f5;
  }
`;
