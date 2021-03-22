import styled from "styled-components";
import NavList from "./NavList";

const NavContainer = styled.nav``;

function Nav() {
  return (
    <NavContainer>
      <NavList></NavList>
    </NavContainer>
  );
}

export default Nav;
