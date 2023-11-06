import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/header/Header";
import Container from "./components/global/Container";

import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { NavigationProvider } from "./contexts/NavigationCotext";
import { DarkModeProvider } from "./contexts/DarkModeContext";

function App() {
  return (
    <DarkModeProvider>
      <NavigationProvider>
        <GlobalStyles />
        <Container>
          <Header />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </Container>
      </NavigationProvider>
    </DarkModeProvider>
  );
}

export default App;
