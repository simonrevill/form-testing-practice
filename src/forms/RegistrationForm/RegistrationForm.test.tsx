import { render, screen } from "@testing-library/react";
import { renderWithUserEvent } from "../../utils/testUtils";
import Form from "./RegistrationForm";

describe("registration form tests", () => {
  describe("initial layout tests", () => {
    it("renders the first name field", () => {
      render(<Form />);

      const firstName = screen.getByLabelText("First name");

      expect(firstName).toBeVisible();
      expect(firstName).toHaveValue("");
    });

    it("renders the last name field", () => {
      render(<Form />);

      const lastName = screen.getByLabelText("Last name");

      expect(lastName).toBeVisible();
      expect(lastName).toHaveValue("");
    });

    it("renders the age field", () => {
      render(<Form />);

      const age = screen.getByLabelText("Age");

      expect(age).toBeVisible();
      expect(age).toHaveValue(null);
    });

    it("renders the email field", () => {
      render(<Form />);

      const email = screen.getByLabelText("Email");

      expect(email).toBeVisible();
      expect(email).toHaveValue("");
    });

    it("renders the password field", () => {
      render(<Form />);

      const password = screen.getByLabelText("Password");

      expect(password).toBeVisible();
      expect(password).toHaveValue("");
    });

    it("renders the confirm password field", () => {
      render(<Form />);

      const confirmPassword = screen.getByLabelText("Confirm password");

      expect(confirmPassword).toBeVisible();
      expect(confirmPassword).toHaveValue("");
    });

    it("renders the default checked subscribe to newsletter checkbox field", () => {
      render(<Form />);

      const subscribeToNewsletter = screen.getByLabelText(
        "Subscribe to newsletter",
      );

      expect(subscribeToNewsletter).toBeVisible();
      expect(subscribeToNewsletter).toBeChecked();
    });

    it("renders an initially disabled submit button", () => {
      render(<Form />);

      const submit = screen.getByRole("button", { name: "Submit" });

      expect(submit).toBeVisible();
      expect(submit).toBeDisabled();
    });
  });

  describe("form interaction tests", () => {
    it("shows validation error message when first name is not entered", async () => {
      const { user } = renderWithUserEvent(<Form />);

      const firstName = screen.getByLabelText("First name");
      await user.type(firstName, "{Tab}");

      expect(firstName).toHaveAttribute("aria-invalid", "true");
      expect(screen.getByText("First name is required.")).toBeVisible();
    });

    it("shows validation error message when first name is less than 2 characters in length", async () => {
      const { user } = renderWithUserEvent(<Form />);

      const firstName = screen.getByLabelText("First name");
      await user.type(firstName, "J");

      expect(firstName).toHaveAttribute("aria-invalid", "true");
      expect(
        screen.getByText("First name must be at least 2 characters in length."),
      ).toBeVisible();
    });

    it("shows validation error message when first name is more than 30 characters in length", async () => {
      const { user } = renderWithUserEvent(<Form />);

      const firstName = screen.getByLabelText("First name");
      await user.type(firstName, "abcd efgh ijkl mnop qrst uvwxyz");

      expect(firstName).toHaveAttribute("aria-invalid", "true");
      expect(
        screen.getByText(
          "First name must no longer than 30 characters in length.",
        ),
      ).toBeVisible();
    });

    it("shows validation error message when last name is not entered", async () => {
      const { user } = renderWithUserEvent(<Form />);

      const lastName = screen.getByLabelText("Last name");
      await user.type(lastName, "{Tab}");

      expect(lastName).toHaveAttribute("aria-invalid", "true");
      expect(screen.getByText("Last name is required.")).toBeVisible();
    });

    it("shows validation error message when last name is less than 2 characters in length", async () => {
      const { user } = renderWithUserEvent(<Form />);

      const lastName = screen.getByLabelText("Last name");
      await user.type(lastName, "J");

      expect(lastName).toHaveAttribute("aria-invalid", "true");
      expect(
        screen.getByText("Last name must be at least 2 characters in length."),
      ).toBeVisible();
    });

    it("shows validation error message when last name is more than 30 characters in length", async () => {
      const { user } = renderWithUserEvent(<Form />);

      const lastName = screen.getByLabelText("Last name");
      await user.type(lastName, "abcd efgh ijkl mnop qrst uvwxyz");

      expect(lastName).toHaveAttribute("aria-invalid", "true");
      expect(
        screen.getByText(
          "Last name must no longer than 30 characters in length.",
        ),
      ).toBeVisible();
    });

    it("shows validation error message when age is not entered", async () => {
      const { user } = renderWithUserEvent(<Form />);

      const age = screen.getByLabelText("Age");
      await user.type(age, "{Tab}");

      expect(age).toHaveAttribute("aria-invalid", "true");
      expect(screen.getByText("Age is required.")).toBeVisible();
    });

    it("shows validation error message when age is entered as a decimal", async () => {
      const { user } = renderWithUserEvent(<Form />);

      const age = screen.getByLabelText("Age");
      await user.type(age, "23.5");

      expect(age).toHaveAttribute("aria-invalid", "true");
      expect(
        screen.getByText("Age must be a whole number and not decimal."),
      ).toBeVisible();
    });

    it("shows validation error message when age is entered as a negative number", async () => {
      const { user } = renderWithUserEvent(<Form />);

      const age = screen.getByLabelText("Age");
      await user.type(age, "-1");

      expect(age).toHaveAttribute("aria-invalid", "true");
      expect(
        screen.getByText("Age must not be a negative number."),
      ).toBeVisible();
    });
  });
});
