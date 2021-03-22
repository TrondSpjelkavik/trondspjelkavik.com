import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import Hamburger from "./Hamburger";

const NavList = styled.ul`
  position: absolute;
  height: 70px;
  width: 600px;
  background: #051e3e;
  top: 30px;
  right: 0;
  padding: 0 30px 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 9;
  @media (max-width: 768px) {
    display: none;
  }
`;

function Nav() {
  // Fixes path === active
  const router = useRouter();

  // Sends the user to About me container

  function toAboutMe() {
    setTimeout(() => {
      window.scrollTo({
        top: 800,
        behavior: "smooth",
      });
    }, 500);
  }

  return (
    <>
      <Hamburger></Hamburger>
      <NavList>
        <li className={router.pathname == "/" ? "active" : ""}>
          <Link href="/">Home</Link>
        </li>
        <li className={router.pathname == "/projects" ? "active" : ""}>
          <Link href="/projects">Projects</Link>
        </li>
        <li onClick={toAboutMe}>
          <Link href="/">About me</Link>
        </li>
        <li className={router.pathname == "/contact" ? "active" : ""}>
          <Link href="/contact">Contact</Link>
        </li>
      </NavList>
    </>
  );
}

export default Nav;
