import { AboutContainer, AboutHeadline, OrangeLine } from "./WhoAmI";

import styled from "styled-components";

const AboutMeText = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  height: 250px;
  max-width: 600px;
  font-size: 18px;
  border-left: 3px solid #051e3e;
  padding-left: 20px;
  @media (max-width: 800px) {
    border: none;
    padding: 40px 0 0 0;
    height: 300px;
    margin: 0 10px 50px 10px;
  }
  @media (max-width: 445px) {
    margin-bottom: 100px;
  }
  @media (max-width: 365px) {
    margin-bottom: 150px;
  }
`;

const AboutMeBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const AboutMeParagraph = styled.p`
  @media (max-width: 800px) {
    margin-bottom: 20px;
  }
`;

const PortfolioImg = styled.img`
  padding-right: 40px;
  @media (max-width: 800px) {
    padding: 0;
    height: 240px;
    width: 250px;
  }
`;

function About() {
  return (
    <AboutContainer>
      <AboutHeadline>About me</AboutHeadline>
      <OrangeLine></OrangeLine>
      <AboutMeBox>
        <PortfolioImg src="./trond.png" alt="profile image"></PortfolioImg>
        <AboutMeText>
          <AboutMeParagraph style={{ fontWeight: "700" }}>
            Currently studying Front-End Developer @ Noroff - School of
            technology and digital media.
          </AboutMeParagraph>
          <AboutMeParagraph>
            I want to make a better web. One that is fast, easy to use,
            accessible to all and error-free. Started my journey to become a
            developer in october 2019, and after 14 years in sales I have found
            my passion. Learning new technologies and creating new projects are
            features I love in this profession.
          </AboutMeParagraph>
          <AboutMeParagraph>
            I am currently learning Go - golang along with my studies. I believe
            Go will become a very important language in the future.
          </AboutMeParagraph>
          <AboutMeParagraph>
            My goal is to be a Full-Stack Developer, because I like to know and
            understand what drives an application.
          </AboutMeParagraph>
        </AboutMeText>
      </AboutMeBox>
    </AboutContainer>
  );
}

export default About;
