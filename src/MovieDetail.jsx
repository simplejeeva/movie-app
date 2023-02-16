import { useParams, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import * as React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useEffect, useState } from "react";
export function MovieDetail() {
  const { id } = useParams();

  const [Movie, setMovie] = useState({});
  useEffect(() => {
    fetch(`https://63d75fe45dbd72324424a1a1.mockapi.io/movie/${id}`)
      .then((data) => data.json())
      .then((mvs) => setMovie(mvs));
  }, [id]);

  console.log(Movie);
  let style = {
    color: Movie.rating > 8.5 ? "green" : "red",
  };

  const navigate = useNavigate();
  return (
    <div>
      <iframe
        width="100%"
        height="650"
        src={Movie.trailer}
        title="Varisu - Official Trailer | Thalapathy Vijay | Rashmika | Vamshi Paidipally | Dil Raju | S.Thaman"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div className="movie-detailcontainer">
        <div className="sub-div">
          <h2 className="movie-name">{Movie.name} </h2>
          <p style={style} className="rating">
            ⭐{Movie.rating}
          </p>
        </div>

        <p className="summary">{Movie.summary}</p>
        <Button
          startIcon={<KeyboardBackspaceIcon />}
          variant="contained"
          onClick={() => navigate(-1)}
        >
          back
        </Button>
      </div>
    </div>
  );
}
