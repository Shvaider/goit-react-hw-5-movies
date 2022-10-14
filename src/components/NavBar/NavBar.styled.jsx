import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  text-align: center;
  list-style: none;
  margin: 0px;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
`;

export const NavListItem = styled.li`
  & + & {
    margin-left: 30px;
  }
`;

export const NavListLink = styled(NavLink)`
  padding: 8px 16px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: block;
  font-size: 18px;
  min-width: 180px;
  margin-bottom: 20px;
  margin: 10px auto;
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