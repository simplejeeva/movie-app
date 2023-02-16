import reactLogo from "./assets/react.svg";
import "./App.css";
import Stack from "@mui/material/Stack";
import { Movielist } from "./Movielist";
import { TicTacToe } from "./TicTacToe";
import { Routes, Route, Link, useNavigate, Navigate } from "react-router-dom";
import { Addcolor } from "./Addcolor";
import { Notfound } from "./Notfound";
import { Home } from "./Home";
import { PanoramaFishEyeSharp, PanoramaSharp } from "@mui/icons-material";
import { useState } from "react";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Addmovie } from "./Addmovie";
import { MovieDetail } from "./MovieDetail";
import { Basicform } from "./Basicform";
import { EditMovie } from "./EditMovie";
function App() {
  const navigate = useNavigate();
  const [mode, setmode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  const bgstyle = {
    borderRadius: "0px",
    minHeight: "100vh",
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper sx={bgstyle} elevation={3}>
        <div className="app">
          <AppBar position="static">
            <Toolbar>
              <Button onClick={() => navigate("/")} color="inherit">
                Home
              </Button>
              <Button onClick={() => navigate("/Tic-Tac-Toe")} color="inherit">
                TicTacToeGame
              </Button>
              <Button onClick={() => navigate("/Movies")} color="inherit">
                movies
              </Button>
              <Button onClick={() => navigate("/Movies/Add")} color="inherit">
                AddMovie
              </Button>
              <Button onClick={() => navigate("/color-game")} color="inherit">
                colorGame
              </Button>

              <Button
                sx={{ marginLeft: "auto" }}
                onClick={() => setmode(mode === "light" ? "dark" : "light")}
                color="inherit"
                startIcon={
                  mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
                }
              >
                {mode === "light" ? "dark" : "light"}Mode
              </Button>
            </Toolbar>
          </AppBar>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Tic-Tac-Toe" element={<TicTacToe />} />
            <Route path="/flims" element={<Navigate replace to="/Movies" />} />
            <Route path="/Movies" element={<Movielist />} />
            <Route path="/Movies/Add" element={<Addmovie />} />
            <Route path="/Basic-form" element={<Basicform />} />
            <Route path="/Movies/:id" element={<MovieDetail />} />
            <Route path="/Movies/edit/:id" element={<EditMovie />} />
            <Route path="/color-game" element={<Addcolor />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </div>
      </Paper>
    </ThemeProvider>
  );
}
export default App;
