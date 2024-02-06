"use client";

import { ControllerRenderProps } from "react-hook-form";
import { MentionsInput, Mention } from "react-mentions";

type MentionProps = {
  id: string;
  display: string;
};

type TExistingTags = (query: string) => MentionProps[];

const MentionField = ({
  field,
  tags
}: {
  field: ControllerRenderProps<any, any>;
  tags: string[];
}) => {
  const renderSugg: TExistingTags = (search) => {
    const filterTags = tags
      .filter((tag) => {
        return tag.startsWith(search);
      })
      .map((tag) => {
        return {
          id: tag.toLowerCase(),
          display: tag
        };
      });
    const addQuerySugg = [
      ...filterTags,
      {
        id: search.toLocaleLowerCase(),
        display: search
      }
    ];
    return addQuerySugg;
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
        data={(search: string) => {
          const data = renderSugg(search);
          return data;
        }}
        displayTransform={(mention) => `#${mention}`}
      />
    </MentionsInput>
  );
};

export { MentionField };
