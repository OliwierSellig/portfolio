import { Outlet } from "react-router";
import { useData } from "../../contexts/DataContext";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import LoadingWindow from "./LoadingWindow";
import styled from "styled-components";

const StyledLayout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 120rem;
  min-height: 100vh;
  margin: 0 auto;
  padding: 9.4rem 3.2rem 2.4rem;

  & main {
    position: relative;
    flex-grow: 1;
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
