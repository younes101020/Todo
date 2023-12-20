/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import { Todo } from "@/features/todos/components/todo";

describe("Home", () => {
  it("renders a heading", () => {
    render(
      <Todo
        title={"acheter des piles"}
        tags={["tele", "confort"]}
        status={"IN_PROGRESS"}
        priority={"URGENT"}
        createdAt={24}
      />
    );

    const listitem = screen.getByRole("heading", {
      name: "acheter des piles"
    });

    expect(listitem).toBeInTheDocument();
  });
});
