"use client";

import { ControllerRenderProps } from "react-hook-form";
import { MentionsInput, Mention } from "react-mentions";

const MentionField = ({
  field,
  tags
}: {
  field: ControllerRenderProps<any, any>;
  tags: string[];
}) => {
  const existingTags = tags.map((tag) => {
    return {
      id: tag.toLowerCase(),
      display: tag.at(0) + tag.slice(1)
    };
  });

  const handleMention = () => {
    console.log("added");
  };

  return (
    <MentionsInput
      singleLine
      {...field}
      style={{
        "&singleLine": {
          input: { padding: 7 }
        },
        suggestions: {
          item: {
            "&focused": {
              backgroundColor: "hsl(var(--secondary))",
              color: "hsl(var(--secondary-foreground))"
            }
          },
          marginTop: 27,
          backgroundColor: "hsl(var(--background))",
          color: "hsl(var(--foreground))",
          padding: ".2rem",
          borderRadius: ".5rem",
          border: ".1rem solid hsl(var(--border))",
          fontWeight: "300"
        }
      }}
      className="flex w-full rounded-md border border-input bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
    >
      <Mention
        trigger="#"
        style={{ textDecoration: "white" }}
        className="bg-popover rounded-md"
        data={existingTags}
        onAdd={handleMention}
        displayTransform={(mention) => `#${mention}`}
      />
    </MentionsInput>
  );
};

export { MentionField };
