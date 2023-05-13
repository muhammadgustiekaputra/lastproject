import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import React from "react";
import { apiFood } from "../api/apiFood";
import * as Yup from "yup";

function Nav() {
  const [modal, setModal] = useState(false);
  const isLogin = JSON.parse(localStorage.getItem("profile"));
  const [name, setName] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));
  const showModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const handleLogOut = () => {
    apiFood.get("/logout", {
      headers: {
        apiKey: "w05KkI9AWhKxzvPFtXotUva-",
        Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q"}`,
      },
    });
    localStorage.removeItem("profile");
    localStorage.removeItem("token", token);

    alert("Log Out Berhasil");
    window.location.reload();
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required(),
      password: Yup.string().required(),
    }),
    onSubmit: (values) => {
      apiFood
        .post(
          "/login",
          {
            email: values.email,
            password: values.password,
          },
          {
            headers: {
              apiKey: "w05KkI9AWhKxzvPFtXotUva-",
            },
          }
        )
        .then((response) => {
          alert("Login sukses");
          localStorage.setItem("profile", JSON.stringify(response.data));
          const token = response.data.token;
          setToken(token);
          localStorage.setItem("token", token);
          window.location.reload();
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });

  useEffect(() => {
    const saveprofile = localStorage.getItem("profile");
    if (saveprofile) {
      const parsedprofile = JSON.parse(saveprofile);
      setName(parsedprofile.user.name);
    }
  }, []);

  return (
    <>
<nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
<ul className="navbar-nav me-auto mb-2 mb-lg-0">
{isLogin ? (
<li className="nav-item">
<h1 onClick={handleLogOut} className="nav-link text-white">
Logout
</h1>
</li>
) : (
<li className="nav-item">
<h1 onClick={showModal} className="nav-link text-white">
Login
</h1>
</li>
)}
<li className="nav-item">
<Link to="/register" className="nav-link text-white">
Register
</Link>
</li>
</ul>
<form className="d-flex" role="search">
<input
             className="form-control me-2"
             type="search"
             placeholder="Search"
             aria-label="Search"
           />
<button className="btn btn-outline-light" type="submit">
Search
</button>
</form>
</div>
</div>
</nav>
<Modal show={modal} onHide={closeModal}>
    <Modal.Header closeButton>
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Modal.Body>
  </Modal>
</>
);
}

export default Nav;
