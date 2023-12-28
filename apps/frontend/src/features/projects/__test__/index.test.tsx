/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import { ProgressBar } from "../components/ui";

describe("progressbar static", () => {
  it("renders correct progress val", () => {
    render(<ProgressBar value={50} />);

    const texts = screen.getByText("50% réaliser");

    expect(texts).toBeInTheDocument();
  });
});
