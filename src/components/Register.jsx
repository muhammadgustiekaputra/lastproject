import { useFormik } from "formik";
import React from "react";
import { apiFood } from "../api/apiFood";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Nav";

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
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      password: Yup.string().required("Password is required"),
      passwordRepeat: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Password confirmation is required"),
      role: Yup.string().required("Role is required"),
      profilePictureUrl: Yup.string().required("Profile Picture URL is required"),
      phoneNumber: Yup.string().required("Phone Number is required"),
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
          alert("Registration Successful!");
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });

  const handleRegister = () => {
    formik.handleSubmit();
  };

  return (
    <div style={{ background: "rgba(128, 128, 128, 0.5)" }}>
      <Navbar />
      <div>
        <Form
          onSubmit={formik.handleSubmit}
          style={{ width: "50%", margin: "0 auto" }}
        >
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="name"
              id="name"
              isInvalid={formik.touched.name && formik.errors.name}
            />
            {formik.touched.name && formik.errors.name && (
              <Form.Control.Feedback type="invalid">
                {formik.errors.name}
              </Form.Control.Feedback>
            )}
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="email"
              id="email"
              isInvalid={formik.touched.email && formik.errors.email}
            />
            {formik.touched.email && formik.errors.email && (
              <Form.Control.Feedback type="invalid">
                {formik.errors.email}
              </Form.Control.Feedback>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="password"
              id="password"
              isInvalid={formik.touched.password && formik.errors.password}
            />
            {formik.touched.password && formik.errors.password && (
              <Form.Control.Feedback type="invalid">
                {formik.errors.password}
              </Form.Control.Feedback>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password Repeat</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={formik.values.passwordRepeat}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="passwordRepeat"
              id="passwordRepeat"
              isInvalid={
                formik.touched.passwordRepeat && formik.errors.passwordRepeat
              }
            />
            {formik.touched.passwordRepeat && formik.errors.passwordRepeat && (
              <Form.Control.Feedback type="invalid">
                {formik.errors.passwordRepeat}
              </Form.Control.Feedback>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Role</Form.Label>
            <Form.Control
              as="select"
              placeholder="Role"
              required
              name="role"
              id="role"
              value={formik.values.role}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.role && formik.errors.role}
            >
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </Form.Control>
            {formik.touched.role && formik.errors.role && (
              <Form.Control.Feedback type="invalid">
                {formik.errors.role}
              </Form.Control.Feedback>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Profile Picture URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="profilePictureUrl"
              name="profilePictureUrl"
              id="profilePictureUrl"
              value={formik.values.profilePictureUrl}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={
                formik.touched.profilePictureUrl &&
                formik.errors.profilePictureUrl
              }
            />
            {formik.touched.profilePictureUrl &&
              formik.errors.profilePictureUrl && (
                <Form.Control.Feedback type="invalid">
                  {formik.errors.profilePictureUrl}
                </Form.Control.Feedback>
              )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="phoneNumber"
              name="phoneNumber"
              id="phoneNumber"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={
                formik.touched.phoneNumber && formik.errors.phoneNumber
              }
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber && (
              <Form.Control.Feedback type="invalid">
                {formik.errors.phoneNumber}
              </Form.Control.Feedback>
            )}
          </Form.Group>

          <Button variant="primary" type="button" onClick={handleRegister}>
            Register
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Register;
