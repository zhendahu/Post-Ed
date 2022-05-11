import React from "react";
import { Form, Button } from "react-bootstrap";
import "./Login.css";
import axios from "axios";

class LoginModal extends React.Component {
  componentDidMount() {
    axios.post('//127.0.0.1:8000/api-auth/token/', 
    {"username": "admin", "password": "123456"}
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render() {
    return (
      <div id="form">
        <Form style={{margin:"1rem"}}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="email" placeholder="Enter username" />

          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default LoginModal;
