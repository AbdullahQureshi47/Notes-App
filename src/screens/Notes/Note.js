import React from "react";
import { styled } from "styletron-react";
import {
  CloseButton,
  Editable,
  EditableInput,
  EditablePreview,
  IconButton,
  Tooltip,
} from "@chakra-ui/core";
import { formatDistanceToNow } from "date-fns";
import Datepicker from "react-datepicker";
import theme from "../../theme";

const NoteCard = styled("div", ({ $focused }) => ({
  position: "relative",
  padding: $focused ? "1.2rem" : "0.4rem",
  border: $focused ? `2px solid ${theme.grey}` : "none",
  width: "100%",
  borderRadius: "6px",
  marginTop: "1rem",
}));

const Note = styled("div", () => ({
  display: "flex",
}));

const Actions = styled("div", () => ({
  display: "flex",
  marginTop: "1rem",
  justifyContent: "flex-end",
}));

const TimeContainer = styled("span", () => ({
  fontSize: "0.8rem",
  paddingBottom: "0.2rem",
}));

const FooterContainer = styled("div", () => ({
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "space-between",
}));

const Footer = styled("div", ({ $show }) => ({
  display: $show ? "flex" : "none",
  flexDirection: "column",
}));

const ButtonWithTooltip = ({ label = "", ...props }) => (
  <Tooltip zIndex={2} hasArrow label={label}>
    <IconButton {...props} />
  </Tooltip>
);

export default ({ details = {}, isCategoryFocused, onUpdate, onDelete }) => {
  const { content = "", id, completionDate } = details;
  const [isFocused, setIsFocused] = React.useState(false);
  const handleAdd = (key, value) => {
    onUpdate({
      ...details,
      [key]: value,
    });
  };

  return (
    <NoteCard $focused={isFocused}>
      {isFocused && (
        <CloseButton
          position="absolute"
          size="sm"
          top="0.1rem"
          right="0.1rem"
          onClick={() => setIsFocused(false)}
        />
      )}
      <Note>
        <div>&bull; &nbsp;&nbsp;</div>
        <Editable
          key={Math.random()}
          onSubmit={(value) => value && handleAdd("content", value)}
          placeholder="Click to add a note"
          width="100%"
          defaultValue={content}
          isPreviewFocusable={isCategoryFocused}
          onFocus={() => {
            setIsFocused(true);
          }}
        >
          <EditableInput name="content" />
          <EditablePreview />
        </Editable>
      </Note>
      <Footer $show={isFocused}>
        <FooterContainer>
          <TimeContainer>
            Completion time -{" "}
            {completionDate
              ? formatDistanceToNow(new Date(completionDate))
              : ""}
          </TimeContainer>
          <Actions>
            <ButtonWithTooltip
              label="Delete"
              disabled={!id}
              size="sm"
              variant="outline"
              isRound={true}
              icon="delete"
              onClick={() => {
                if (confirm("Are you sure you want to delete?")) {
                  onDelete();
                }
              }}
            />
            <ButtonWithTooltip
              label="Mark as Complete"
              size="sm"
              variant="outline"
              isRound={true}
              marginLeft="1rem"
              icon="check"
            />
            <Datepicker
              minDate={Date.now()}
              selected={completionDate ? new Date(completionDate) : new Date()}
              timeInputLabel="Time:"
              dateFormat="MM/dd/yyyy h:mm aa"
              onChange={(date) => handleAdd("completionDate", date)}
              showPopperArrow={false}
              showTimeInput
              customInput={
                <ButtonWithTooltip
                  label="Update Completion Date"
                  size="sm"
                  variant="outline"
                  isRound={true}
                  marginLeft="1rem"
                  icon="calendar"
                />
              }
            />
          </Actions>
        </FooterContainer>
      </Footer>
    </NoteCard>
  );
};
