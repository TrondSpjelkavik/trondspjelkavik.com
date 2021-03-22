import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

const HamburgerItems = styled.ul`
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
  transition: 0.5s ease-in-out;

  @media (max-width: 768px) {
    display: flex;
    flex-flow: column nowrap;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};

    top: 0;
    right: 0;
    height: 100vh;
    padding: 80px 0;
    width: 100vw;
    justify-content: space-around;
  }
`;

function HamburgerList({ open, setOpen }) {
  const router = useRouter();

  // Send the the user to About me container

  function toAboutMe() {
    setTimeout(() => {
      window.scrollTo({
        top: 800,
        behavior: "smooth",
      });
    }, 500);
    setOpen(false);
  }

  return (
    <>
      <HamburgerItems open={open}>
        <li
          className={router.pathname == "/" ? "active" : ""}
          onClick={() => {
            setOpen(false);
          }}
        >
          <Link href="/">Home</Link>
        </li>
        <li
          className={router.pathname == "/projects" ? "active" : ""}
          onClick={() => {
            setOpen(false);
          }}
        >
          <Link href="/projects">Projects</Link>
        </li>
        <li onClick={toAboutMe}>
          <Link href="/">About me</Link>
        </li>
        <li
          className={router.pathname == "/contact" ? "active" : ""}
          onClick={() => {
            setOpen(false);
          }}
        >
          <Link href="/contact">Contact</Link>
        </li>
      </HamburgerItems>
    </>
  );
}

export default HamburgerList;
