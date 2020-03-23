import React from "react";
import { cardThemes } from "../../theme";
import { Box } from "@chakra-ui/core";

export default () => {
  return (
    <Box display="flex" flexShrink={0}>
      {Object.keys(cardThemes).map((keys) => (
        <Box
          title={keys}
          cursor="pointer"
          marginLeft="4px"
          width="1.5rem"
          height="1.5rem"
          borderRadius="50%"
          backgroundColor={cardThemes[keys].backgroundColor}
        />
      ))}
    </Box>
  );
};
