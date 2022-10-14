import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ListItem = styled.li`
  box-shadow: rgb(204 204 204) 0px 0px 8px 1px;
  border-radius: 5px;
  width: 300px;
`;
export const Img = styled.img`
  width: 100%;
  height: 400px;
  transition: transform 250 ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
`;

export const LinkItem = styled(Link)`
  text-decoration: none;
  color: black;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;

export const Title = styled.h2`
  font-weight: 500;
  margin: 0;
  padding: 10px;
`;

export const Span = styled.span`
  font-weight: 100;
`;