import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid #eee;
`;

const Nav = styled.nav`
  display: flex;
  justify-content:center;
  gap: 20px;

  a {
    color: ${({ theme }) => theme.colors.gray};
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s ease;

    &.active {
      color: ${({ theme }) => theme.colors.primary};
    }

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
      </Nav>
    </HeaderContainer>
  );
}
