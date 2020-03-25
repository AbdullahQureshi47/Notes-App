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
import Datepicker from "react-datepicker";
import theme from "../../theme";
import Input from "../components/Input";

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

export default ({ details = {} }) => {
  const { content = "" } = details;
  const [isFocused, setIsFocused] = React.useState(false);
  const [isDateInputOpen, setIsDateInputOpen] = React.useState(false);
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
          value={content}
          onFocus={() => {
            setIsFocused(true);
          }}
        >
          <EditableInput />
          <EditablePreview />
        </Editable>
      </Note>
      <Footer $show={isFocused}>
        <FooterContainer>
          <TimeContainer>Time Left - 2 hours</TimeContainer>
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
              onClick={() => setIsDateInputOpen(!isDateInputOpen)}
            />
          </Actions>
        </FooterContainer>
        {isDateInputOpen && (
          <Input
            placeholderText="Please input completion date and time"
            $style={{
              marginTop: "0.4rem",
            }}
            $as={Datepicker}
          />
        )}
      </Footer>
    </NoteCard>
  );
};
