import styled from 'styled-components';

export const NavBar = styled.nav`
  height: 60px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #5009ff;

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #fff;
    font-size: 16px;
    font-weight: 600;

    &:hover {
      opacity: 0.9;
    }
  }
`;
