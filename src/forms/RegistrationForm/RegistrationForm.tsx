import Label from "../../components/Label";
import NumberInput from "../../components/NumberInput";
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
      <input type="email" name="email" id="email" />

      <Label htmlFor="password">Password</Label>
      <input type="password" name="password" id="password" />

      <Label htmlFor="confirmPassword">Confirm password</Label>
      <input type="password" name="confirmPassword" id="confirmPassword" />

      <Label htmlFor="subscribeToNewsletter">Subscribe to newsletter</Label>
      <input
        type="checkbox"
        name="confirmPassword"
        id="subscribeToNewsletter"
        defaultChecked
      />

      <button type="submit" disabled>
        Submit
      </button>
    </form>
  );
};

export default RegistrationForm;
