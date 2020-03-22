import React from "react";
import { styled } from "styletron-react";
import { set } from "dot-prop-immutable";
import Category from "./Category";
import theme from "../../theme";

const NotesContainer = styled("div", () => ({
  width: "100vw",
  minHeight: "100vh",
  backgroundColor: "#F4F5F7",
}));

const CategoryContainer = styled("div", () => ({
  display: "flex",
  alignItems: "flex-start",
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
    notes: [
      {
        content: "Hello this is notes and this cant hurt u",
        date: new Date(),
        completed: false,
      },
      {
        content: "Hello this is notesand this is the new one heheh",
        date: new Date(),
        completed: true,
      },
      {
        content:
          "Hello this is notes and this is the one that can or cannot hurt u",
        date: new Date(),
        completed: false,
      },
    ],
  },
  {
    id: "work",
    heading: "Work",
    notes: [
      {
        content: "Hello this is notes and this cant hurt u",
        date: new Date(),
        completed: false,
      },

      {
        content:
          "Hello this is notes and this is the one that can or cannot hurt u",
        date: new Date(),
        completed: false,
      },
    ],
  },
  {
    id: "office",
    heading: "Office",
    notes: [
      {
        content: "Hello this is notes and this cant hurt u",
        date: new Date(),
        completed: false,
      },
      {
        content: "Hello this is notesand this is the new one heheh",
        date: new Date(),
        completed: true,
      },
      {
        content:
          "Hello this is notes and this is the one that can or cannot hurt u",
        date: new Date(),
        completed: false,
      },
    ],
  },
  {
    id: "school",
    heading: "School",
    notes: [
      {
        content: "Hello this is notes and this cant hurt u",
        date: new Date(),
        completed: false,
      },
      {
        content: "Hello this is notesand this is the new one heheh",
        date: new Date(),
        completed: true,
      },
      {
        content:
          "Hello this is notes and this is the one that can or cannot hurt u",
        date: new Date(),
        completed: false,
      },
    ],
  },
  {
    id: "misc",
    heading: "Misc",
    notes: [
      {
        content: "Hello this is notes and this cant hurt u",
        date: new Date(),
        completed: false,
      },
      {
        content: "Hello this is notesand this is the new one heheh",
        date: new Date(),
        completed: true,
      },
      {
        content:
          "Hello this is notes and this is the one that can or cannot hurt u",
        date: new Date(),
        completed: false,
      },
    ],
  },
];

export default () => {
  const [selectedCategory, setSelectedCategory] = React.useState("");
  const handleSelectCategory = (id) => () => {
    setSelectedCategory(id);
  };
  const closeSelectedCategory = (e) => {
    e.stopPropagation();
    setSelectedCategory("");
  };

  const addNote = (index) => (details) => {
    const updated = set(categories, `${index}.notes`, (notes) => [
      ...notes,
      details,
    ]);
    console.log({ updated });
  };
  return (
    <NotesContainer>
      <Heading>Start Keeping your notes</Heading>
      <CategoryContainer>
        {categories.map((category, index) => (
          <Category
            key={category.id}
            isFocused={selectedCategory === category.id}
            onSelect={handleSelectCategory(category.id)}
            onClose={closeSelectedCategory}
            details={category}
            onAddNote={addNote(index)}
          />
        ))}
      </CategoryContainer>
    </NotesContainer>
  );
};
