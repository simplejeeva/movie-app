import { Movie } from "./Movie";
import { Addmovie } from "./Addmovie";
import { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Navigate, useNavigate } from "react-router-dom";
import { API } from "./global";

export function Movielist() {
  const [movielist, setMovielist] = useState([]);
  const getMovies = () => {
    fetch(`${API}/movies`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setMovielist(mvs));
  };
  useEffect(() => getMovies(), []);
  const deletMovie = async (id) => {
    console.log("deleting movie", id);
    await fetch(`${API}/movies/${id}`, {
      method: "DELETE",
    });
    getMovies();
  };
  const navigate = useNavigate();
  return (
    <div>
      <div className="main">
        {movielist.map((mv) => (
          <Movie
            key={mv.id}
            movie={mv}
            id={mv.id}
            Deletbutton={
              <IconButton
                color="secondary"
                onClick={() => deletMovie(mv.id)}
                sx={{ marginLeft: "auto" }}
              >
                <DeleteIcon />
              </IconButton>
            }
            editButton={
              <IconButton
                color="error"
                onClick={() => navigate(`/movies/edit/${mv.id}`)}
                sx={{ marginLeft: "auto" }}
              >
                <EditIcon />
              </IconButton>
            }
          />
        ))}
      </div>
    </div>
  );
}
