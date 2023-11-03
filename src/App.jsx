import GlobalStyles from "./GlobalStyles";
import Header from "./components/header/Header";
import Container from "./components/global/Container";

import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </Container>
    </>
  );
}

export default App;
