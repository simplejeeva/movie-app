import { useState } from "react";
import { Count } from "./Count";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";

export function Movie({ movie, id, Deletbutton, editButton }) {
  let style = {
    color: movie.rating > 8.5 ? "green" : "red",
  };
  const [show, setshow] = useState(true);

  const navigate = useNavigate();
  return (
    <Card className="movie-container">
      <img className="poster" src={movie.poster} alt="" />
      <CardContent>
        <div className="sub-div">
          <h2 className="movie-name">
            {movie.name}

            <IconButton
              color="primary"
              onClick={() => setshow(!show)}
              aria-label="toggle summary"
            >
              {show ? <ExpandLessOutlinedIcon /> : <ExpandMoreOutlinedIcon />}
            </IconButton>
            <IconButton
              color="primary"
              onClick={() => navigate("/Movies/" + id)}
              aria-label="Movie details"
            >
              <InfoIcon />
            </IconButton>
          </h2>

          <p style={style} className="rating">
            ⭐{movie.rating}
          </p>
        </div>

        {show ? <p className="summary">{movie.summary}</p> : null}
        <CardActions>
          <Count />
          {Deletbutton}
          {editButton}
        </CardActions>
      </CardContent>
    </Card>
  );
}
