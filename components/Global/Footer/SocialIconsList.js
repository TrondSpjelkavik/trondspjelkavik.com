import { FaLinkedinIn, FaFacebookF, FaGithub } from "react-icons/fa";
import styled from "styled-components";

export const SocialIconsContainer = styled.div`
  display: flex;
  max-width: 300px;
  justify-content: space-around;
  margin: 0 auto;
  align-item: center;
`;

export const SocialIcons = styled.div`
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  height: 65px;
  width: 55px;
  background: #651e3e;
  align-items: center;
  justify-content: center;
  display: flex;
  position: relative;
  top: 70px;
  cursor: pointer;
  &:hover {
    background: #db6400;
  }
`;

function SocialIconsList() {
  function toGithub() {
    window.open("https://github.com/TrondSpjelkavik");
  }

  function toLinkedin() {
    window.open(
      "https://www.linkedin.com/in/trond-fuglseth-spjelkavik-80871552/"
    );
  }

  function toFacebook() {
    window.open("https://www.facebook.com/Trondchivu");
  }

  return (
    <SocialIconsContainer>
      <SocialIcons onClick={toGithub}>
        <FaGithub className="social-icons"></FaGithub>
      </SocialIcons>
      <SocialIcons onClick={toLinkedin}>
        <FaLinkedinIn className="social-icons"></FaLinkedinIn>
      </SocialIcons>
      <SocialIcons onClick={toFacebook}>
        <FaFacebookF className="social-icons"></FaFacebookF>
      </SocialIcons>
    </SocialIconsContainer>
  );
}

export default SocialIconsList;
