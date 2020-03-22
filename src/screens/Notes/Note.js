import React from "react";
import { styled } from "styletron-react";
import {
  Editable,
  EditableInput,
  EditablePreview,
  IconButton,
  Tooltip,
} from "@chakra-ui/core";
import theme from "../../theme";

const NoteCard = styled("div", () => ({
  padding: "1rem",
  border: `2px solid ${theme.grey}`,
  width: "100%",
  borderRadius: "6px",
  marginTop: "1rem",
}));

const Note = styled("span", () => ({}));

const Actions = styled("div", () => ({
  display: "flex",
  marginTop: "1rem",
  justifyContent: "flex-end",
}));

const ButtonWithTooltip = ({ label = "", ...props }) => (
  <Tooltip hasArrow label={label}>
    <IconButton {...props} />
  </Tooltip>
);

export default ({ details = {} }) => {
  const { content = "" } = details;
  return (
    <NoteCard>
      <Note>
        <Editable value={content}>
          <EditableInput />
          <EditablePreview />
        </Editable>
      </Note>
      <Actions>
        <ButtonWithTooltip
          label="Delete"
          size="sm"
          variant="outline"
          isRound={true}
          icon="delete"
        />
        <ButtonWithTooltip
          label="Mark as Complete"
          size="sm"
          variant="outline"
          isRound={true}
          marginLeft="1rem"
          icon="check"
        />
        <ButtonWithTooltip
          label="Update Completion Date"
          size="sm"
          variant="outline"
          isRound={true}
          marginLeft="1rem"
          icon="calendar"
        />
      </Actions>
    </NoteCard>
  );
};
