import styled from "styled-components";
import { useState } from "react";
import HamburgerList from "./HamburgerList";

const HamburgerMenu = styled.div`
  display: none;
  @media (max-width: 768px) {
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 15px;
    right: 20px;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index: 999;
    cursor: pointer;

    div {
      width: 2rem;
      height: 0.25rem;
      background-color: ${({ open }) => (open ? "white" : "#db6400")};
      transform-origin: 1px;
      border-radius: 10px;
      transition: all 0.3s linear;

      &:nth-child(1) {
        transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      }
      &:nth-child(2) {
        transform: ${({ open }) =>
          open ? "translateX(100%)" : "translateX(0)"};
        opacity: ${({ open }) => (open ? 0 : 1)};
      }
      &:nth-child(3) {
        transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  }
`;

function Hamburger() {
  // Open and close hamburger

  const [open, setOpen] = useState(false);

  return (
    <>
      <HamburgerMenu open={open} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </HamburgerMenu>
      <HamburgerList open={open} setOpen={setOpen}></HamburgerList>
    </>
  );
}

export default Hamburger;
