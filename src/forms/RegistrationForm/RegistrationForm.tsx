import Label from '../../components/Label';

const RegistrationForm = () => {
  return (
    <form>
      <Label htmlFor="firstName">First name</Label>
      <input type="text" name="firstName" id="firstName" />

      <Label htmlFor="lastName">Last name</Label>
      <input type="text" name="lastName" id="lastName" />

      <Label htmlFor="age">Age</Label>
      <input type="number" name="age" id="age" />

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
