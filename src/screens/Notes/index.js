import React from "react";
import { styled } from "styletron-react";
import Category from "./Category";
import theme from "../../theme";

const NotesContainer = styled("div", () => ({
  width: "100vw",
  minHeight: "100vh",
  backgroundColor: "#F4F5F7",
}));

const CategoryContainer = styled("div", () => ({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  justifyContent: "flex-start",
  padding: "2rem",
}));

const Heading = styled("div", () => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.primaryColor,
  fontSize: "5rem",
  height: "10rem",
  textTransform: "uppercase",
}));

const categories = [
  {
    id: "home",
    heading: "Home",
  },
  {
    id: "work",
    heading: "Work",
  },
  { id: "office", heading: "Office" },
  { id: "school", heading: "School" },
  { id: "misc", heading: "Misc" },
];

export default () => {
  const [selectedCategory, setSelectedCategory] = React.useState("");
  const handleSelectCategory = (id) => () => {
    setSelectedCategory(id);
  };
  return (
    <NotesContainer>
      <Heading>Start Keeping your notes</Heading>
      <CategoryContainer>
        {categories.map((category) => (
          <Category
            key={category.id}
            isFocused={selectedCategory === category.id}
            onClick={handleSelectCategory(category.id)}
            details={category}
          />
        ))}
      </CategoryContainer>
    </NotesContainer>
  );
};
