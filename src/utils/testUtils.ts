import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";
import { ReactElement } from "react";

export const renderWithUserEvent = (element: ReactElement) => {
  return {
    user: userEvent.setup(),
    ...render(element),
  };
};
