import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  gap: 30px;
  justify-content: space-between;
  height: 50px;
  align-items: center;
`;

export const Link = styled(NavLink)`
  :nth-child(2n + 1) {
    margin-right: 20px;
  }
  &.active {
    color: rgba(138, 59, 202, 0.9);
    border-bottom: 2px solid #5f0ea2;
  }
  color: #a031b8bb;
  text-decoration: none;
  font-size: 18px;
  font-weight: 600;
  padding: 11px 4px;
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  padding: 0 15px;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  min-width: 220px;
  gap: 10px;
`;
