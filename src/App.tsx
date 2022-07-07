import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import GenerateRouteElement from "./components/Guards/GenerateRouteElement";
import { AuthContextProvider } from "./context/AuthContext";
import AppRoutes from "./routes/index";

function App() {
  return (
    <div className="App h-screen flex justify-center items-center px-4">
      <div className="w-full max-w-sm">
        <AuthContextProvider>
          <BrowserRouter>
            <Routes>
              {AppRoutes.map((route) => {
                const element = GenerateRouteElement(
                  <route.element />,
                  route.meta
                );
                return (
                  <Route path={route.path} element={element} key={route.name} />
                );
              })}
            </Routes>
          </BrowserRouter>
        </AuthContextProvider>
      </div>
    </div>
  );
}

export default App;
