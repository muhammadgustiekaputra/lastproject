import { useFormik } from "formik";
import React from "react";
import { apiFood } from "../api/apiFood";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
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
          alert("Registrasi Berhasil!!!");
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });
  return (
    <div style={{ background: "rgba(128, 128, 128, 0.5)" }}>
      <div>
      <Form onSubmit={formik.handleSubmit} style={{ width: "50%", margin: "0 auto" }}>
        <Form.Group className="mb-3" >
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={formik.values.name}
            onChange={formik.handleChange}
            name="name"
            id="name"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            name="email"
            id="email"
          />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            name="password"
            id="password"
          />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Password Repeat</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={formik.values.passwordRepeat}
            onChange={formik.handleChange}
            name="passwordRepeat"
            id="passwordRepeat"
          />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Role</Form.Label>
          <Form.Control
            // type="required"
            placeholder="Role"
            required
            name="role"
            id="role"
            value={formik.values.role}
            onChange={formik.handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Profile Picture URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="profilePictureUrl"
            name="profilePictureUrl"
            id="profilePictureUrl"
            value={formik.values.profilePictureUrl}
            onChange={formik.handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>phoneNumber</Form.Label>
          <Form.Control
            type="phoneNumber"
            placeholder="phoneNumber"
            name="phoneNumber"
            id="phoneNumber"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </div>
    </div>
  );
};

export default Register;
