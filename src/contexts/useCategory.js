import React from "react";

const INITIAL_STATE = [
  {
    id: "home",
    heading: "Home",
    theme: "yellow",
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
    theme: "default",
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
    theme: "pink",
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

const CategoryContext = React.createContext([]);

const useCategory = () => {
  const { categories, setCategories } = React.useContext(CategoryContext);
  return {
    categories,
    setCategories,
  };
};

const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = React.useState(INITIAL_STATE);
  return (
    <CategoryContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoryContext.Provider>
  );
};

export { CategoryProvider, useCategory };
