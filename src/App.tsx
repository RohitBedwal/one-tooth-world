import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routing/AppRoutes";
import { ContextProvider } from "./context/ContextProvider";

export default function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <AppRoutes />
      </ContextProvider>
    </BrowserRouter>
  );
}
