import { useState } from "react";
import { createContext } from "react";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Components/Routes/Routes";
import "./App.css"
export const ThemContext = createContext(null)
function App() {
  const [theme, setTheme] = useState("light");
  const themToggel = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }
  return (
    <ThemContext.Provider value={{ theme, themToggel }}>
      <div className="App" id={theme}>
        <RouterProvider router={routes}></RouterProvider>
      </div >
    </ThemContext.Provider>

  );
}

export default App;
