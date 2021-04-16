import React from "react";
import styled from "styled-components";
import { GoArrowUp } from "react-icons/go";
import SocialIconsList from "./SocialIconsList";

const FooterContainer = styled.footer`
  height: 200px;
  width: 100%;
  background: #051e3e;
  font-family: "Inconsolata", monospace;
  position: relative;
  justify-content: center;
  margin-top: 150px;
`;

const ToTheTop = styled.button`
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  height: 50px;
  width: 45px;
  background: #db6400;
  border: none;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &:hover {
    top: -27px;
  }
`;

const CopyrightText = styled.p`
  color: white;
  font-size: 14px;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
`;

function Footer() {
  // function to scroll smooth to the top.

  function toTheTopButton() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  // Redirect to social websites

  return (
    <FooterContainer>
      <ToTheTop onClick={toTheTopButton} aria-label="To the top button">
        <GoArrowUp className="arrow-icon"></GoArrowUp>
      </ToTheTop>
      <SocialIconsList></SocialIconsList>
      <CopyrightText>Trond Fuglseth Spjelkavik © 2021</CopyrightText>
    </FooterContainer>
  );
}

export default Footer;
