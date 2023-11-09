import styled from "styled-components";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Outlet } from "react-router";
import { useData } from "../../contexts/DataContext";
import LoadingWindow from "./LoadingWindow";

const StyledLayout = styled.div`
  position: relative;
  max-width: 120rem;
  margin: 0 auto;
  padding: 9.4rem 3.2rem 2.4rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  & main {
    flex-grow: 1;
    position: relative;
  }

  @media only screen and (max-width: 460px) {
    padding: 9.4rem 1.6rem 2.4rem;
  }
`;

function AppLayout() {
  const { readyToShow } = useData();

  return (
    <StyledLayout>
      <Header />
      <main>{readyToShow ? <Outlet /> : <LoadingWindow />}</main>
      <Footer />
    </StyledLayout>
  );
}

export default AppLayout;
