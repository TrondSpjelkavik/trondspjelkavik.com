import styled from "styled-components";
import { SocialIcons } from "../Global/Footer/Footer";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaGithub,
  FaWindowClose,
} from "react-icons/fa";

const SendSuccessfully = styled.div`
  position: absolute;
  top: 300px;
  width: 100%;
  height: 550px;
  background: #051e3e;
  z-index: 99;
  max-width: 800px;
  color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: ${({ send }) => (send ? "flex" : "none")};
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  @media (max-width: 800px) {
    height: 600px;
  }
  @media (max-width: 468px) {
    top: 100px;
  }
  @media (max-width: 468px) and (max-height: 667px) {
    top: 80px !important;
  }

  @media (max-height: 859px) {
    top: 300px;
  }
  @media (max-height: 760px) {
    top: 150px;
  }
`;

const SendSuccessfullyHeadline = styled.h2`
  text-align: center;
  color: white;
  width: 100%;
  @media (max-width: 414px) {
    position: relative;
    top: 50px;
  }
`;

const SendSuccessfullyParagraph = styled.p`
  font-size: 20px;
  text-align: center;
  color: white;
  width: 100%;
  @media (max-width: 414px) {
    font-size: 16px;
  }
`;

const CloseSuccessBox = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
`;

const SendSuccessfullySocialIconsContainer = styled.div`
  justify-content: space-around;
  width: 50%;
  display: flex;
  position: relative;
  top: -120px;
  @media (max-width: 468px) {
    width: 70%;
  }
`;

function SuccessSend({ send, setSend }) {
  function closeWindow() {
    setSend(false);
  }

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
    <SendSuccessfully send={send} setSend={setSend}>
      <CloseSuccessBox>
        <FaWindowClose
          className="close-icon"
          onClick={closeWindow}
        ></FaWindowClose>
      </CloseSuccessBox>
      <SendSuccessfullyHeadline>
        Message successfully sent
      </SendSuccessfullyHeadline>
      <SendSuccessfullyParagraph>
        Thank you for sending me a message. I will reply as soon as possible.
      </SendSuccessfullyParagraph>
      <SendSuccessfullySocialIconsContainer>
        <SocialIcons>
          <FaGithub className="social-icons" onClick={toGithub}></FaGithub>
        </SocialIcons>
        <SocialIcons>
          <FaLinkedinIn
            className="social-icons"
            onClick={toLinkedin}
          ></FaLinkedinIn>
        </SocialIcons>
        <SocialIcons>
          <FaFacebookF
            className="social-icons"
            onClick={toFacebook}
          ></FaFacebookF>
        </SocialIcons>
      </SendSuccessfullySocialIconsContainer>
    </SendSuccessfully>
  );
}

export default SuccessSend;
