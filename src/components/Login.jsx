import { useFormik } from "formik";
import React from "react";
import { apiFood } from "../api/apiFood";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as Yup from "yup";

const login = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      passwordRepeat: "",
      role: "",
      profilePictureUrl: "",
      phoneNumber: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required(),
      email: Yup.string().required(),
      password: Yup.string().required(),
      passwordRepeat: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Password confirmation is required"),
        // role: Yup.string().required(),
      profilePictureUrl: Yup.string().required(),
      phoneNumber: Yup.string().required(),
    }),
    onSubmit: (values) => {
      apiFood
        .post(
          "/register",
          {
            name: values.name,
            email: values.email,
            password: values.password,
            passwordRepeat: values.passwordRepeat,
            profilePictureUrl: values.profilePictureUrl,
            phoneNumber: values.phoneNumber,
            role:values.role,
          },
          {
            headers: {
              apiKey: "w05KkI9AWhKxzvPFtXotUva-",
            },
          }
        )
        .then((response) => {
          alert("Login sukses");
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });
  return (
    <div>
      
    </div>
  )
}

export default login
