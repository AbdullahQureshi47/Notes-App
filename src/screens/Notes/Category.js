import React from "react";
import { styled } from "styletron-react";
import {
  CloseButton,
  Editable,
  EditableInput,
  EditablePreview,
  Button,
} from "@chakra-ui/core";
import theme from "../../theme";
import Note from "./Note";

const Category = styled("div", ({ $isFocused }) => ({
  minHeight: "20rem",
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
  transition: "0.2s transform",
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

const NoteCardContainer = styled("div", () => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  marginTop: "2rem",
  width: "100%",
}));

export default ({
  isFocused,
  details,
  onSelect,
  onClose,
  // onAddNote = () => {},
}) => {
  const [isNewNoteFormOpen, setIsNewNoteFormOpen] = React.useState(false);
  const { heading = "", notes = [] } = details;
  return (
    <Category $isFocused={isFocused} onClick={onSelect}>
      {isFocused && (
        <CloseButton
          position="absolute"
          top="0.3rem"
          right="0.3rem"
          onClick={onClose}
        />
      )}
      <CategoryHeader>
        <Editable isDisabled={!isFocused} value={heading}>
          <EditableInput />
          <EditablePreview />
        </Editable>
      </CategoryHeader>

      <NoteCardContainer>
        {notes.map((note) => (
          <Note details={note} />
        ))}
      </NoteCardContainer>
      {isNewNoteFormOpen && <Note details={{}} />}
      <Button
        leftIcon="add"
        backgroundColor={theme.primaryColor}
        color="white"
        marginTop="1rem"
        width="100%"
        onClick={() => setIsNewNoteFormOpen(true)}
      >
        Add a note
      </Button>
    </Category>
  );
};
