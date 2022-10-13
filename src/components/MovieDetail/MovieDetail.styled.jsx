import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  margin-left: 200px;
  margin-right: 200px;
`;

export const LinkEl = styled(Link)`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  display: flex;
  align-items: center;
  color: black;
  text-decoration: none;
  margin-bottom: 20px;
  font-size: 22px;
  text-transform: uppercase;
  svg {
    margin-right: 10px;
    color: #9a8c98;
    &:hover {
      color: #4a4e69;
    }
  }
`;

export const Img = styled.img`
  display: inline-block;
  height: auto;
  margin-right: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const Box = styled.div`
  display: flex;
  padding-bottom: 40px;
`;

export const Title = styled.h2`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  display: block;
  margin: 0;
`;

export const Text = styled.p`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  margin: 0;
`;

export const Info = styled.div`
  border-top: 2px solid #c9ada7;
  border-bottom: 2px solid #c9ada7;
  padding-bottom: 20px;
  padding-top: 20px;
`;

export const ListInfo = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ItemListInfo = styled.li`
  & + & {
    margin-left: 20px;
  }
`;

export const LinkListInfo = styled(NavLink)`
  padding: 8px 16px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  // display: block;
  font-size: 13px;
  min-width: 120px;
  margin-bottom: 40px;
  margin: 30px auto;
  cursor: pointer;
    position: relative;
    color: #171717;
    font-weight: bold;
    text-decoration: none;
    text-shadow: rgba(255,255,255,.5) 1px 1px, rgba(100,100,100,.3) 3px 7px 3px;
    user-select: none;
    outline: none;
    border-radius: 2px / 50%;
    background-image:
     linear-gradient(45deg, rgba(255,255,255,.0) 30%, rgba(255,255,255,.8), rgba(255,255,255,.0) 70%),
     linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0) 20%, rgba(255,255,255,0) 90%, rgba(255,255,255,.3)),
     linear-gradient(to right, rgba(125,125,125,1), rgba(255,255,255,.9) 45%, rgba(125,125,125,.5)),
     linear-gradient(to right, rgba(125,125,125,1), rgba(255,255,255,.9) 45%, rgba(125,125,125,.5)),
     linear-gradient(to right, rgba(223,190,170,1), rgba(255,255,255,.9) 45%, rgba(223,190,170,.5)),
     linear-gradient(to right, rgba(223,190,170,1), rgba(255,255,255,.9) 45%, rgba(223,190,170,.5));
    background-repeat: no-repeat;
    background-size: 200% 100%, auto, 100% 2px, 100% 2px, 100% 1px, 100% 1px;
    background-position: 200% 0, 0 0, 0 0, 0 100%, 0 4px, 0 calc(100% - 4px);
    box-shadow: rgba(53, 50, 106, 0.5) 3px 10px 10px -10px;
    &:hover{
      transition: .5s linear;
      background-position: -200% 0, 0 0, 0 0, 0 100%, 0 4px, 0 calc(100% - 4px);
      box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.15);
      transform: translateX(-1px);
    &:active {
      top: 1px;
      background-color: #4a4e69;
    }
`;

export const TitleInfo = styled.h2`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  display: block;
  margin: 0;
  margin-bottom: 20px;
`;