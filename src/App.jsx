import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./components/global/AppLayout";

import { NavigationProvider } from "./contexts/NavigationCotext";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import ProjectView from "./pages/ProjectView";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <DarkModeProvider>
      <NavigationProvider>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Main />} />
              <Route path=":slug" element={<ProjectView />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </NavigationProvider>
    </DarkModeProvider>
  );
}

export default App;
