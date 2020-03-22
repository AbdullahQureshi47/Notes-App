import React from "react";
import { styled } from "styletron-react";

const Container = styled("div", () => ({
  height: "100vh",
  width: "100vw",
  backgroundColor: "#32a852",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));

const Button = styled("button", () => ({
  padding: "2rem",
  fontSize: "2rem",
  borderRadius: "6px"
}));

export default ({ history }) => {
  return (
    <Container>
      <Button onClick={() => history.push("/notes")}>
        Start your notes 🙂
      </Button>
    </Container>
  );
};
