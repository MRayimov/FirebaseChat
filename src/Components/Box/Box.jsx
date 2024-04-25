import React from "react";
import styled from "styled-components";

const Container = styled("div")`
  width: 250px;
  height: 450px;
  background-color: #ccc;
  border-radius: 20px;
  margin: 10px;
`;

const Image = styled("img")`
  width: 250px;
  border-radius: 20px 20px 0 0;
  height: 300px;
`;
const Box = ({ ism, yosh, hobby }) => {
  return (
    <Container>
      <h1>{ism}</h1>
      <p>{yosh}</p>
      <h4>Hobby:</h4>
      <ul>
        {hobby.map((element) => (
          <li>{element}</li>
        ))}
      </ul>
    </Container>
  );
};

export default Box;
