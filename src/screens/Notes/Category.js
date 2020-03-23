import React from "react";
import { styled } from "styletron-react";
import {
  CloseButton,
  Editable,
  EditableInput,
  EditablePreview,
  Button,
  IconButton,
  PopoverContent,
  Popover,
  PopoverTrigger,
  PopoverBody,
  PopoverHeader,
} from "@chakra-ui/core";
import { cardThemes } from "../../theme";
import ThemePicker from "./ThemePicker";
import Note from "./Note";

const Category = styled("div", ({ $isFocused, $theme = "default" }) => ({
  minHeight: "20rem",
  width: "21%",
  backgroundColor: cardThemes[$theme].backgroundColor,
  color: cardThemes[$theme].fontColor + "!important",
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

const CategoryHeader = styled("div", ({ $theme }) => ({
  fontSize: "1.4rem",
  color: cardThemes[$theme].fontColor,
  position: "relative",
  ":after": {
    content: '""',
    width: "8rem",
    height: "0.3rem",
    position: "absolute",
    borderRadius: "0.2px",
    backgroundColor: cardThemes[$theme].primaryColor,
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
  const { heading = "", theme = "blue", notes = [] } = details;
  return (
    <Category $isFocused={isFocused} onClick={onSelect} $theme={theme}>
      {isFocused && (
        <CloseButton
          position="absolute"
          top="0.3rem"
          right="0.3rem"
          onClick={onClose}
        />
      )}
      <CategoryHeader $theme={theme}>
        <Editable isDisabled={!isFocused} value={heading}>
          <EditableInput />
          <EditablePreview />
        </Editable>
      </CategoryHeader>

      <NoteCardContainer>
        {notes.map((note) => (
          <Note details={note} isCategoryFocused={isFocused} />
        ))}
      </NoteCardContainer>
      {isNewNoteFormOpen && <Note details={{}} />}
      <Button
        leftIcon="add"
        backgroundColor={cardThemes[theme].primaryColor}
        color="white"
        marginTop="1rem"
        width="100%"
        onClick={() => setIsNewNoteFormOpen(true)}
      >
        Add a note
      </Button>
      <Popover placement="top">
        <PopoverTrigger>
          <IconButton
            title="Choose theme"
            marginTop="1rem"
            float="right"
            size="sm"
            aria-label="Search database"
            icon="search"
            bg={cardThemes[theme].primaryColor}
          />
        </PopoverTrigger>
        <PopoverContent width="10rem">
          <PopoverHeader color="black">Pick A theme</PopoverHeader>
          <PopoverBody>
            <ThemePicker />
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Category>
  );
};
