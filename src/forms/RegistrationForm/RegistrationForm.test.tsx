import { render, screen } from "@testing-library/react";
import Form from "./RegistrationForm";

describe("registration form tests", () => {
  describe("initial layout tests", () => {
    it("renders the first name field correctly", () => {
      render(<Form />);

      const firstName = screen.getByLabelText("First name");

      expect(firstName).toBeVisible();
      expect(firstName).toHaveValue("");
    });

    it("renders the last name field correctly", () => {
      render(<Form />);

      const lastName = screen.getByLabelText("Last name");

      expect(lastName).toBeVisible();
      expect(lastName).toHaveValue("");
    });

    it("renders the age field correctly", () => {
      render(<Form />);

      const age = screen.getByLabelText("Age");

      expect(age).toBeVisible();
      expect(age).toHaveValue(null);
    });

    it("renders the email field correctly", () => {
      render(<Form />);

      const email = screen.getByLabelText("Email");

      expect(email).toBeVisible();
      expect(email).toHaveValue("");
    });

    it("renders the password field correctly", () => {
      render(<Form />);

      const password = screen.getByLabelText("Password");

      expect(password).toBeVisible();
      expect(password).toHaveValue("");
    });

    it("renders the confirm password field correctly", () => {
      render(<Form />);

      const confirmPassword = screen.getByLabelText("Confirm password");

      expect(confirmPassword).toBeVisible();
      expect(confirmPassword).toHaveValue("");
    });

    it("renders the subscribe to newsletter field correctly", () => {
      render(<Form />);

      const subscribeToNewsletter = screen.getByLabelText(
        "Subscribe to newsletter"
      );

      expect(subscribeToNewsletter).toBeVisible();
      expect(subscribeToNewsletter).toBeChecked();
    });

    it("renders an initially disabled submit button correctly", () => {
      render(<Form />);

      const submit = screen.getByText("Submit");

      expect(submit).toBeVisible();
      expect(submit).toBeDisabled();
    });
  });
});
