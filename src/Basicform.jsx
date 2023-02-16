import Button from "@mui/material/Button";
import * as React from "react";
import * as yup from "yup";

import { useFormik } from "formik";

const formValidationSchema = yup.object({
  //   email: yup.email().string().required().min(12, "need a bigger email"),
  password: yup.string().required().min(12, "need a bigger email").max(12),
});
export function Basicform() {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: formValidationSchema,
    onSubmit: (values) => console.log("form values", values),
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        name="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        type="email"
        placeholder="email"
      />
      {formik.touched.email && formik.errors.email ? formik.errors.email : null}
      <input
        name="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        type="text"
        placeholder="password"
      />
      {formik.touched.password && formik.errors.password
        ? formik.errors.password
        : null}
      <Button type="submit">submit</Button>
      {/* Values
      <pre>{JSON.stringify(formik.values)}</pre>
      Error
      <pre>{JSON.stringify(formik.errors)}</pre>
      Touched
      <pre>{JSON.stringify(formik.touched)}</pre> */}
    </form>
  );
}
