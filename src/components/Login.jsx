import { useFormik } from "formik";
import React, { useState, useHistory } from "react";
import { apiFood } from "../api/apiFood";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as Yup from "yup";

const Register = () => {
  const history = useHistory();
  const [passwordError, setPasswordError] = useState(false);

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
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      password: Yup.string().required("Password is required"),
      passwordRepeat: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Password confirmation is required"),
      role: Yup.string().required("Role is required"),
      profilePictureUrl: Yup.string().required("Profile picture URL is required"),
      phoneNumber: Yup.string().required("Phone number is required"),
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
            role: values.role,
          },
          {
            headers: {
              apiKey: "w05KkI9AWhKxzvPFtXotUva-",
            },
          }
        )
        .then((response) => {
          if (response.data.success) {
            alert("Registration Successful!");
            history.push("/home");
          } else {
            setPasswordError(true);
          }
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
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.name && formik.errors.name}
            />
            <Form.Control.Feedback type="invalid">{formik.errors.name}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.email && formik.errors.email}
            />
            <Form.Control.Feedback type="invalid">{formik.errors.email}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.password && formik.errors.password}
            />
            <Form.Control.Feedback type="invalid">{formik.errors.password}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="passwordRepeat">
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control
              type="password"
              placeholder="Repeat your password"
              name="passwordRepeat"
              value={formik.values.passwordRepeat}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.passwordRepeat && formik.errors.passwordRepeat}
            />
            <Form.Control.Feedback type="invalid">{formik.errors.passwordRepeat}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="role">
            <Form.Label>Role</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your role"
              name="role"
              value={formik.values.role}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.role && formik.errors.role}
            />
            <Form.Control.Feedback type="invalid">{formik.errors.role}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="profilePictureUrl">
            <Form.Label>Profile Picture URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter profile picture URL"
              name="profilePictureUrl"
              value={formik.values.profilePictureUrl}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.profilePictureUrl && formik.errors.profilePictureUrl}
            />
            <Form.Control.Feedback type="invalid">{formik.errors.profilePictureUrl}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="phoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your phone number"
              name="phoneNumber"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.phoneNumber && formik.errors.phoneNumber}
            />
            <Form.Control.Feedback type="invalid">{formik.errors.phoneNumber}</Form.Control.Feedback>
          </Form.Group>

          {passwordError && (
            <Form.Text className="text-danger">Password Error. Please try again.</Form.Text>
          )}

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Register;
