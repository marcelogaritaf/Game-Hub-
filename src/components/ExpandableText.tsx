import { Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";
interface Props {
  children: string;
}
const ExpandableText = ({ children }: Props) => {
  const [expand, setExpand] = useState(false);
  const limit = 300;
  if (!children) return "";
  if (children.length <= limit) return <Text>{children}</Text>;
  const summary = expand ? children : children.substring(0, limit) + "...";
  return (
    <Text>
      {summary}
      <Button
        size="xs"
        fontWeight="bold"
        colorScheme="yellow"
        onClick={() => setExpand(!expand)}
        marginX={2}
      >
        {expand ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;