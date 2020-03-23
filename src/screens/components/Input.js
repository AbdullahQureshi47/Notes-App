import { styled } from "styletron-react";
import theme from "../../theme";

export default styled("input", () => ({
  border: `1px solid ${theme.borderColor}`,
  "margin-top": " 2rem",
  width: "100%",
  padding: " 0.5rem",
  "border-radius": " 6px",
  "font-size": " 1rem",
  "border-width": " 1px",
  "background-color": " white",
}));
