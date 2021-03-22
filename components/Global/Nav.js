import styled from "styled-components";
import NavList from "./components/NavList";

const NavContainer = styled.nav``;

function Nav() {
  return (
    <NavContainer>
      <NavList></NavList>
    </NavContainer>
  );
}

export default Nav;
