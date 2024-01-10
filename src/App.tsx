import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NavigationProvider } from "./contexts/NavigationContext";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import { DataProvider } from "./contexts/DataContext";
import { ScrollToTop } from "./services/helpers";
import AppLayout from "./components/global/AppLayout";
import PageNotFound from "./components/global/PageNotFound";
import Main from "./pages/Main";
import ProjectView from "./pages/ProjectView";
import GlobalStyles from "./styles/GlobalStyles";

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
