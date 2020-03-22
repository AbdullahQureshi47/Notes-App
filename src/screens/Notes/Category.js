import React from "react";
import { styled } from "styletron-react";

const Category = styled("div", ({ $isFocused }) => ({
  height: "20rem",
  width: "30%",
  backgroundColor: "white",
  marginBottom: "2rem",
  boxShadow: "0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)",
  padding: "1rem",
  borderRadius: "6px",
  transform: $isFocused ? "scale(1.2)" : "scale(1)",
  transformOrigin: "left",
  zIndex: $isFocused ? 1 : 0,
}));

export default ({ isFocused }) => {
  return <Category $isFocused={isFocused}>Hello I am category</Category>;
};
