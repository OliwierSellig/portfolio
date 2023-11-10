import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./components/global/AppLayout";
import { NavigationProvider } from "./contexts/NavigationCotext";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import ProjectView from "./pages/ProjectView";
import PageNotFound from "./components/global/PageNotFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { DataProvider } from "./contexts/DataContext";
import { ScrollToTop } from "./services/helpers";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <DataProvider>
        <DarkModeProvider>
          <NavigationProvider>
            <GlobalStyles />
            <BrowserRouter>
              <ScrollToTop />
              <Routes>
                <Route element={<AppLayout />}>
                  <Route path="/" element={<Main />} />
                  <Route path=":slug" element={<ProjectView />} />
                  <Route path="*" element={<PageNotFound />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </NavigationProvider>
        </DarkModeProvider>
      </DataProvider>
    </QueryClientProvider>
  );
}

export default App;
