import { createBrowserRouter, Route, RouterProvider, Routes, } from "react-router-dom";
import { ThemeProvider } from "../context/themeContext";
import Home from "./home";
import { PokeData } from "../apiConsumer/pokeData";
import PokeDetail from "./pokedetails";
import pokeDataContext from "../context/pokeDataContext";
const router = createBrowserRouter([
  { path: "*", Component: Root }
]);
export default function RootRoute() {
  return <RouterProvider router={router} />;
}
function Root() {
  const { pokedata, amount, setAmount, srcImput, setSrcImput } = PokeData()

  return (
    <ThemeProvider>
      <pokeDataContext.Provider value={{ pokedata, amount, setAmount, srcImput, setSrcImput }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokedetails/:id" element={<PokeDetail />} />
        </Routes>
      </pokeDataContext.Provider>
    </ThemeProvider>
  );
}


