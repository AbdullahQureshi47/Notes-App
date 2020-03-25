import React from "react";
import { styled } from "styletron-react";
import Category from "./Category";
import { useCategory } from "../../contexts/useCategory";

const NotesContainer = styled("div", () => ({
  width: "100vw",
  minHeight: "100vh",
  backgroundImage: "url('./assets/notes-bg.jpg')",
  position: "relative",
}));

const CategoryContainer = styled("div", () => ({
  display: "flex",
  alignItems: "flex-start",
  flexWrap: "wrap",
  justifyContent: "flex-start",
  padding: "2rem",
}));

const Overlay = styled("div", {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.8)",
});

const Heading = styled("div", () => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  fontSize: "5rem",
  height: "10rem",
  fontWeight: "bold",
  textTransform: "uppercase",
  position: "relative",
}));

export default () => {
  const { categories } = useCategory();
  const [selectedCategory, setSelectedCategory] = React.useState("");
  const handleSelectCategory = (id) => () => {
    setSelectedCategory(id);
  };
  const closeSelectedCategory = (e) => {
    e.stopPropagation();
    setSelectedCategory("");
  };

  return (
    <NotesContainer>
      <Overlay />
      <Heading>Start Keeping your notes</Heading>
      <CategoryContainer>
        {categories.map((category) => (
          <Category
            key={category.id}
            isFocused={selectedCategory === category.id}
            onSelect={handleSelectCategory(category.id)}
            onClose={closeSelectedCategory}
            details={category}
          />
        ))}
      </CategoryContainer>
    </NotesContainer>
  );
};
