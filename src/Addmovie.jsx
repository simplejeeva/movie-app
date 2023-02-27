import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { API } from "./global";

const formValidationSchema = yup.object({
  name: yup.string().required(),
  poster: yup.string().required().min(4).url(),
  summary: yup.string().required().min(20),
  rating: yup.number().required().min(0).max(10),
  trailer: yup.string().required().min(4).url(),
});

export function Addmovie() {
  const formik = useFormik({
    initialValues: {
      name: " ",
      poster: " ",
      summary: " ",
      rating: " ",
      trailer: " ",
    },
    validationSchema: formValidationSchema,
    // validationSchema: formValidationSchema,
    onSubmit: (newMovie) => {
      console.log("form values", newMovie);
      addmovie(newMovie);
    },
  });
  // const [name, setname] = useState("");
  // const [poster, setposter] = useState("");
  // const [summary, setsummary] = useState("");
  // const [rating, setrating] = useState("");
  // const [trailer, setTrailer] = useState("");
  const navigate = useNavigate();
  const addmovie = async (newMovie) => {
    console.log(newMovie);
    await fetch(`${API}/movies`, {
      method: "POST",
      body: JSON.stringify(newMovie),
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

      <Button variant="contained" type="submit">
        add movie
      </Button>
    </form>
  );
}
