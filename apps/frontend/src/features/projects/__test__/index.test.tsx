/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import { Sidebar } from "@/features/projects/components/sidebar";

describe("sidebar static", () => {
  it("renders a heading", () => {
    render(<Sidebar />);

    const listitem = screen.getByRole("heading", {
      name: "Projet(s) 🧑‍💻"
    });

    expect(listitem).toBeInTheDocument();
  });
});
