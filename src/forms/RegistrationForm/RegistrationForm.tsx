const RegistrationForm = () => {
  return (
    <form>
      <label htmlFor="firstName">First name</label>
      <input type="text" name="firstName" id="firstName" />

      <label htmlFor="lastName">Last name</label>
      <input type="text" name="lastName" id="lastName" />

      <label htmlFor="age">Age</label>
      <input type="number" name="age" id="age" />

      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" />

      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" />

      <label htmlFor="confirmPassword">Confirm password</label>
      <input type="password" name="confirmPassword" id="confirmPassword" />

      <label htmlFor="subscribeToNewsletter">Subscribe to newsletter</label>
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
