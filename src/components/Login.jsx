import { useState } from "react";
import { apiTmdb } from "../api/apiTmdb";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const isLogin = JSON.parse(localStorage.getItem("session"));
  const isLogged = JSON.parse(localStorage.getItem("datas"));

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  }; 

  async function handleSubmit(e) {
    e.preventDefault();
    await axios.get("https://api.themoviedb.org/3/authentication/token/new?api_key=531141070857720d2988be054b0e4707").then((response) => {
      console.log(response);
      axios.post(`https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=531141070857720d2988be054b0e4707`, {
        username: username,
        password: password,
        request_token: response.data.request_token,
      }).then((response2) => {
        console.log(response2);
        axios.post("https://api.themoviedb.org/3/authentication/session/new?api_key=531141070857720d2988be054b0e4707", {
          request_token: response.data.request_token,
        }).then((response3) => {
          localStorage.setItem("session", JSON.stringify(response3.data.session_id));
          axios.get(`https://api.themoviedb.org/3/account?api_key=531141070857720d2988be054b0e4707&session_id=${response3.data.session_id}`).then((response4) => {
            localStorage.setItem("datas", JSON.stringify(response4.data));
            window.location.reload();
            console.log(response4);
          });
        });
      });
    }).catch((error) => {
      alert(error.message);
    });
  }

  return (
    <>
      <h1 className="text-white mt-4">Login</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="text" placeholder="Enter email" onChange={(e) => setUsername(e.target.value)} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        {!isLogged ? (
          <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e)}>Login</Button>
        ) : (
          <>
            <Button as={Link} to="/" variant="primary" type="submit" onClick={handleLogout}>Logout</Button>
            <h3 className="text-white mt-4">Selamat Datang, Gusti!!</h3>
          </>
        )}
      </Form>
    </>
  );
}

export default Login;
