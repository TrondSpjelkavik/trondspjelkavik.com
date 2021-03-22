import Meta from "../Layout/Meta";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

import styled from "styled-components";

const GlobalLayoutContainer = styled.main`
  min-height: 100vh;
`;

function GlobalLayout({ children }) {
  return (
    <>
      <Meta></Meta>
      <Nav></Nav>
      <GlobalLayoutContainer>{children}</GlobalLayoutContainer>
      <Footer></Footer>
    </>
  );
}

export default GlobalLayout;
