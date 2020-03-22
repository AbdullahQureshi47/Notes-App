import React from "react";
import { styled } from "styletron-react";
import theme from "../../theme";
import Input from "../components/Input";

const Category = styled("div", ({ $isFocused }) => ({
  height: "20rem",
  width: "21%",
  backgroundColor: "white",
  marginBottom: "2rem",
  boxShadow: "0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)",
  padding: "2rem 1rem",
  borderRadius: "6px",
  transform: $isFocused ? "scale(1.2)" : "scale(1)",
  transformOrigin: "top",
  zIndex: $isFocused ? 1 : 0,
  marginLeft: "3rem",
  transition: "0.4s transform",
}));

const CategoryHeader = styled("div", () => ({
  fontSize: "1.4rem",
  color: theme.fontColor,
  position: "relative",
  ":after": {
    content: '""',
    width: "8rem",
    height: "0.3rem",
    position: "absolute",
    borderRadius: "0.2px",
    backgroundColor: theme.primaryColor,
    bottom: "-1rem",
    left: 0,
  },
}));

export default ({ isFocused, details, onClick }) => {
  const { heading = "" } = details;
  return (
    <Category $isFocused={isFocused} onClick={onClick}>
      <CategoryHeader>{heading}</CategoryHeader>
      <Input placeholder="Add a note" />
    </Category>
  );
};
