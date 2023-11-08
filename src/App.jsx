import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./components/global/AppLayout";

import { NavigationProvider } from "./contexts/NavigationCotext";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import ProjectView from "./pages/ProjectView";
import PageNotFound from "./pages/PageNotFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
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
    </QueryClientProvider>
  );
}

export default App;
