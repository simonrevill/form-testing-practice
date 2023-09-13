import CheckboxInput from "../../components/CheckboxInput";
import EmailInput from "../../components/EmailInput";
import Label from "../../components/Label";
import NumberInput from "../../components/NumberInput";
import PasswordInput from "../../components/PasswordInput";
import TextInput from "../../components/TextInput";

const RegistrationForm = () => {
  return (
    <form>
      <Label htmlFor="firstName">First name</Label>
      <TextInput name="firstName" />

      <Label htmlFor="lastName">Last name</Label>
      <TextInput name="lastName" />

      <Label htmlFor="age">Age</Label>
      <NumberInput name="age" />

      <Label htmlFor="email">Email</Label>
      <EmailInput name="email" />

      <Label htmlFor="password">Password</Label>
      <PasswordInput name="password" />

      <Label htmlFor="confirmPassword">Confirm password</Label>
      <PasswordInput name="confirmPassword" />

      <Label htmlFor="subscribeToNewsletter">Subscribe to newsletter</Label>
      <CheckboxInput name="subscribeToNewsletter" defaultChecked />

      <button type="submit" disabled>
        Submit
      </button>
    </form>
  );
};

export default RegistrationForm;
