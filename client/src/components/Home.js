import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  let first_space = [];
  for (let i = 0; i < 6; i++) {
    first_space.push(<br />);
  }
  let second_space = [];
  for (let i = 0; i < 4; i++) {
    second_space.push(<br />);
  }
  let third_space = [];
  for (let i = 0; i < 3; i++) {
    third_space.push(<br />);
  }
  let fourth_space = [];
  for (let i = 0; i < 8; ++i) {
    fourth_space.push(<br />);
  }

  return (
    <div className="home-background">
      {first_space}
      <h1>
        <b className='title'>Post-Ed</b>
      </h1>
      {second_space}
      <Link to="/login">
        <Button variant="light" size="xxl" style={{fontSize: "2.3em",
  borderRadius: "30px",
  color: "black",
  "font-family": "Concert One ",
  "font-weight": "bold"}}>
          &nbsp;Login&nbsp;
        </Button>
      </Link>
      {third_space}
      <Link to="/register">
        <Button variant="light" className='home-button' size="xxl" style={{fontSize: "2.3em",
  borderRadius: "30px",
  color: "black",
  "font-family": "Concert One ",
  "font-weight": "bold"}}>
          &nbsp;Sign Up&nbsp;
        </Button>
      </Link>
      {fourth_space}
    </div>
  );
}

export default Home;
