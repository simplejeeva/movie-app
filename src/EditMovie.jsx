import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { API } from "./global";

const formValidationSchema = yup.object({
  name: yup.string().required(),
  poster: yup.string().required().min(4).url(),
  summary: yup.string().required().min(20),
  rating: yup.number().required().min(0).max(10),
  trailer: yup.string().required().min(4).url(),
});

export function EditMovie() {
  const { id } = useParams();

  const [Movie, setMovie] = useState(null);
  useEffect(() => {
    fetch(`${API}/movies/${id}`)
      .then((data) => data.json())
      .then((mvs) => setMovie(mvs));
  }, [id]);
  console.log(Movie);
  return Movie ? <Editmovieform Movie={Movie} /> : <h2>"loading...";</h2>;
}

function Editmovieform({ Movie }) {
  const formik = useFormik({
    initialValues: {
      name: Movie.name,
      poster: Movie.poster,
      summary: Movie.summary,
      rating: Movie.rating,
      trailer: Movie.trailer,
    },
    validationSchema: formValidationSchema,
    // validationSchema: formValidationSchema,
    onSubmit: (updatedmovie) => {
      console.log("form values", updatedmovie);
      updatemovie(updatedmovie);
    },
  });

  const navigate = useNavigate();
  const updatemovie = async (updatedmovie) => {
    console.log(updatedmovie);
    await fetch(`${API}/movies/${Movie.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedmovie),
      headers: { "Content-Type": "application/json" },
    });
    navigate("/movies");
  };
  return (
    <form onSubmit={formik.handleSubmit} className="add-movie-poster">
      <TextField
        name="name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
        label="name"
        variant="outlined"
        error={formik.touched.name && formik.errors.name}
        helperText={
          formik.touched.name && formik.errors.name ? formik.errors.name : null
        }
      />

      <TextField
        name="poster"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.poster}
        label="poster"
        variant="outlined"
        error={formik.touched.poster && formik.errors.poster}
        helperText={
          formik.touched.poster && formik.errors.poster
            ? formik.errors.poster
            : null
        }
      />

      <TextField
        name="summary"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.summary}
        label="summary"
        variant="outlined"
        error={formik.touched.summary && formik.errors.summary}
        helperText={
          formik.touched.summary && formik.errors.summary
            ? formik.errors.summary
            : null
        }
      />

      <TextField
        name="rating"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.rating}
        label="rating"
        variant="outlined"
        error={formik.touched.rating && formik.errors.rating}
        helperText={
          formik.touched.rating && formik.errors.rating
            ? formik.errors.rating
            : null
        }
      />

      <TextField
        name="trailer"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.trailer}
        label="Trailer"
        variant="outlined"
        error={formik.touched.trailer && formik.errors.trailer}
        helperText={
          formik.touched.trailer && formik.errors.trailer
            ? formik.errors.trailer
            : null
        }
      />

      <Button color="success" variant="contained" type="submit">
        save
      </Button>
    </form>
  );
}
