import React from "react";
import { styled } from "styletron-react";
import { CloseButton, IconButton, Tooltip } from "@chakra-ui/core";
import { formatDistanceToNow } from "date-fns";
import Datepicker from "react-datepicker";
import theme, { cardThemes } from "../../theme";
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
  flexDirection: "row",
  justifyContent: "flex-start",
}));

const TextStyles = styled("div", () => ({
  display: "flex",
  justifyContent: "flex-end",
  marginLeft: "auto",
}));

const TextStyleButton = styled("button", ({ $selected, theme }) => ({
  textTransform: "uppercase",
  height: "2rem",
  width: "2rem",
  marginLeft: "1rem",
  borderRadius: "6px",
  backgroundColor: $selected ? cardThemes[theme].primaryColor : "transparent",
}));

const TimeContainer = styled("span", () => ({
  fontSize: "0.8rem",
  paddingBottom: "0.2rem",
}));

const FooterContainer = styled("div", () => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

const Footer = styled("div", ({ $show }) => ({
  display: $show ? "flex" : "none",
  flexDirection: "column",
}));

const Preview = styled("div", ({ $bold, $italics, $underlined }) => ({
  width: "100%",
  minHeight: "1rem",
  fontWeight: $bold ? 800 : 400,
  fontStyle: $italics ? "italic" : "normal",
  textDecoration: $underlined ? "underline" : "none",
}));

const ButtonWithTooltip = ({ label = "", ...props }) => (
  <Tooltip zIndex={2} hasArrow label={label}>
    <IconButton {...props} />
  </Tooltip>
);

export default ({
  details = {},
  isCategoryFocused,
  onUpdate,
  onDelete,
  theme,
}) => {
  const { content = "", id, completionDate, completed, styles = [] } = details;
  const [isFocused] = React.useState(false);
  const handleAdd = (key, value) => {
    onUpdate({
      ...details,
      [key]: value,
    });
  };

  const updateStyle = (style) =>
    handleAdd(
      "styles",
      styles.includes(style)
        ? styles.filter((s) => s !== style)
        : [...styles, style]
    );

  const [isNoteInputFocused, setNoteInputFocused] = React.useState(false);

  return (
    <NoteCard $focused={isFocused}>
      {isNoteInputFocused && (
        <CloseButton
          position="absolute"
          size="sm"
          top="-1rem"
          right="0rem"
          onClick={() => setNoteInputFocused(false)}
        />
      )}
      <Note>
        <div
          style={{
            color: completed ? "#11FF33" : "#000",
          }}
        >
          {completed ? "✔" : "●"} &nbsp;&nbsp;
        </div>
        {isNoteInputFocused ? (
          <Input
            autoFocus
            rows={10}
            defaultValue={content}
            $bold={styles.includes("b")}
            $italics={styles.includes("i")}
            $underlined={styles.includes("u")}
            onKeyDown={(e) => {
              if (e.keyCode === 13 && e.shiftKey === false) {
                e.preventDefault();
                handleAdd("content", e.target.value);
                setNoteInputFocused(false);
              }
            }}
            placeholder="Click to add a note"
            onBlur={(e) => {
              handleAdd("content", e.target.value);
            }}
          />
        ) : (
          <Preview
            onClick={() => {
              if (isCategoryFocused) {
                setNoteInputFocused(true);
              }
            }}
            $bold={styles.includes("b")}
            $italics={styles.includes("i")}
            $underlined={styles.includes("u")}
          >
            {String(content).length
              ? String(content)
              : "Click here to add a note"}
          </Preview>
        )}
      </Note>

      {content.length ? (
        <Footer $show={isNoteInputFocused}>
          <FooterContainer>
            <TimeContainer>
              Time left -{" "}
              {completionDate
                ? formatDistanceToNow(new Date(completionDate))
                : ""}
            </TimeContainer>

            <Actions>
              <ButtonWithTooltip
                label="Delete"
                disabled={!id}
                size="sm"
                variantColor="black"
                variant="outline"
                isRound={true}
                icon="delete"
                onClick={() => {
                  if (confirm("Are you sure you want to delete?")) {
                    onDelete();
                  }
                }}
              />
              {!completed && (
                <ButtonWithTooltip
                  label="Mark as Complete"
                  size="sm"
                  variantColor="black"
                  variant="outline"
                  isRound={true}
                  marginLeft="1rem"
                  icon="check"
                  onClick={() => handleAdd("completed", true)}
                />
              )}
              <Datepicker
                minDate={Date.now()}
                selected={
                  completionDate ? new Date(completionDate) : new Date()
                }
                timeInputLabel="Time:"
                dateFormat="MM/dd/yyyy h:mm aa"
                onChange={(date) => handleAdd("completionDate", date)}
                showPopperArrow={false}
                showTimeInput
                customInput={
                  <ButtonWithTooltip
                    label="Update Completion Time"
                    size="sm"
                    variantColor="black"
                    variant="outline"
                    isRound={true}
                    marginLeft="1rem"
                    icon="calendar"
                  />
                }
              />
              <TextStyles>
                <TextStyleButton
                  onClick={() => updateStyle("b")}
                  $style={{
                    fontWeight: "bold",
                  }}
                  $selected={styles.includes("b")}
                  theme={theme}
                >
                  B
                </TextStyleButton>
                <TextStyleButton
                  onClick={() => updateStyle("i")}
                  $style={{
                    fontStyle: "italic",
                  }}
                  $selected={styles.includes("i")}
                  theme={theme}
                >
                  I
                </TextStyleButton>
                <TextStyleButton
                  onClick={() => updateStyle("u")}
                  $style={{
                    textDecoration: "underline",
                  }}
                  $selected={styles.includes("u")}
                  theme={theme}
                >
                  U
                </TextStyleButton>
              </TextStyles>
            </Actions>
          </FooterContainer>
        </Footer>
      ) : null}
    </NoteCard>
  );
};
