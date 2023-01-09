import "./css/App.css";
import "./css/Style.css";
import "./css/Types.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { TopBar } from "./components/TopBar";
import { NotFound } from "./components/NotFound";
import { BottomNav } from "./components/BottomNav";

import { Home } from "./views/Home";
import { Abilities } from "./views/Abilities";

import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import { colors } from "@mui/material";
import { useEffect } from "react";
import { getPokemon } from "./services/pokemon";

const Theme = createTheme({
  palette: {
    primary: {
      main: colors.orange[500],
    },
  },
});

function App() {
  const gettingPokemon = async (poke) => {
    const asyncRes = await getPokemon(poke);
    console.log(asyncRes);
  };

  useEffect(() => {
    gettingPokemon("pikachu");
    
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <TopBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/baseStats" element={<NotFound />} />
            <Route path="/moves" element={<NotFound />} />
            <Route path="/abilities" element={<Abilities />} />
          </Routes>
          <BottomNav className="header" />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export { App };
