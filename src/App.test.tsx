import { render, screen } from "@testing-library/react";
import App from "./App";

describe("init", () => {
  it("it renders the app correctly", () => {
    render(<App />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
