import styled from 'styled-components';

export const GalleryItm = styled.li`
   background-color: rgba(255, 255, 255, 0.908);
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: calc(calc((100% - 4 * 20px) / 4));
  height: 190px;
  img {
    object-fit: cover;
  object-position: center center;
  width: 100%;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
    &:hover {
        transform: scale(1.05);
    }
  }
`;