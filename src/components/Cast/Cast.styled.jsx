import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  flex-wrap: wrap;
  gap: 8px;
`;

export const ListItem = styled.li`
  width: 180px;
`;

export const Title = styled.h3`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
`;

export const Text = styled.p`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
`;

export const Img = styled.img`
  height: 250px;
  width: 100%;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.08);
    cursor:zoom-in;
  }
`;