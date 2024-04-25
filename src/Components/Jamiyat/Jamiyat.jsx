import React from "react";
import styled from "styled-components";

const Text = styled("h1")`
  color: #1bb762;
  margin: 10px;
`;
const Container = styled.div`
  display: flex;
`;
const Rasm = styled("img")`
  width: 200px;
  height: 100px;
`;
const Jamiyat = () => {
  return (
    <Container>
      <Text>Avto</Text>
      <Text>Elktr</Text>
      <Text>Jamiyat3</Text>
      <Text>Jamiyat4</Text>
      <Rasm
        src="https://bmw.scene7.com/is/image/BMW/DI20_000012911_DI20_000012829:16to9?fmt=webp&wid=2560&hei=1440"
        alt=""
      />
    </Container>
  );
};

export default Jamiyat;
