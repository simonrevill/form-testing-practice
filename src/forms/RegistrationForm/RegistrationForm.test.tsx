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

  describe("form validation tests", () => {
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

    it("shows validation error message when email is not entered", async () => {
      const { user } = renderWithUserEvent(<Form />);

      const email = screen.getByLabelText("Email");
      await user.type(email, "{Tab}");

      expect(email).toHaveAttribute("aria-invalid", "true");
      expect(screen.getByText("Email address is required.")).toBeVisible();
    });

    it("shows validation error message when email is entered with incorrect format", async () => {
      const { user } = renderWithUserEvent(<Form />);

      const email = screen.getByLabelText("Email");
      await user.type(email, "x@x");

      expect(email).toHaveAttribute("aria-invalid", "true");
      expect(screen.getByText("Email address is invalid.")).toBeVisible();
    });

    it("shows validation error message when password is not entered", async () => {
      const { user } = renderWithUserEvent(<Form />);

      const password = screen.getByLabelText("Password");
      await user.type(password, "{Tab}");

      expect(password).toHaveAttribute("aria-invalid", "true");
      expect(screen.getByText("Password is required.")).toBeVisible();
    });

    it("shows validation error message when password is less than 6 characters", async () => {
      const { user } = renderWithUserEvent(<Form />);

      const password = screen.getByLabelText("Password");
      await user.type(password, "abcde");

      expect(password).toHaveAttribute("aria-invalid", "true");
      expect(
        screen.getByText("Password must be a minimum of 6 characters."),
      ).toBeVisible();
    });

    it("shows validation error message when password is more than 15 characters", async () => {
      const { user } = renderWithUserEvent(<Form />);

      const password = screen.getByLabelText("Password");
      await user.type(password, "abcdefghijklmnop");

      expect(password).toHaveAttribute("aria-invalid", "true");
      expect(
        screen.getByText("Password must be a maximum of 15 characters."),
      ).toBeVisible();
    });

    it("shows validation error message when confirm password is not entered", async () => {
      const { user } = renderWithUserEvent(<Form />);

      const confirmPassword = screen.getByLabelText("Confirm password");
      await user.type(confirmPassword, "{Tab}");

      expect(confirmPassword).toHaveAttribute("aria-invalid", "true");
      expect(screen.getByText("Confirm password is required.")).toBeVisible();
    });

    it("shows validation error message when confirm password does not match password", async () => {
      const { user } = renderWithUserEvent(<Form />);

      // Fill out the rest of the form
      // Zod refine validation will not run if the other validations are
      // not successful:

      const firstName = screen.getByLabelText("First name");
      await user.type(firstName, "Joe");

      const lastName = screen.getByLabelText("Last name");
      await user.type(lastName, "Bloggs");

      const age = screen.getByLabelText("Age");
      await user.type(age, "24");

      const email = screen.getByLabelText("Email");
      await user.type(email, "joe@joebloggs.com");

      const password = screen.getByLabelText("Password");
      await user.type(password, "joebloggs69");

      const confirmPassword = screen.getByLabelText("Confirm password");
      await user.type(confirmPassword, "joebloggs69X");

      expect(confirmPassword).toHaveAttribute("aria-invalid", "true");
      expect(screen.getByText("Passwords do not match.")).toBeVisible();
    });
  });
  describe("form interaction tests", () => {
    it("unchecks the subscribe to newsletter checkbox when clicked", async () => {
      const { user } = renderWithUserEvent(<Form />);

      const subscribeToNewsletter = screen.getByLabelText(
        "Subscribe to newsletter",
      );
      await user.click(subscribeToNewsletter);

      expect(subscribeToNewsletter).not.toBeChecked();
    });
  });
});
