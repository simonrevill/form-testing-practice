import Form from "@components/Form";
import FormControl from "@components/FormControl";
import Label from "@components/Label";
import TextInput from "@components/TextInput";
import NumberInput from "@components/NumberInput";
import EmailInput from "@components/EmailInput";
import PasswordInput from "@components/PasswordInput";
import CheckboxInput from "@components/CheckboxInput";
import ErrorMessage from "@components/ErrorMessage";
import Button from "@components/Button";
import { ErrorMessage as Error } from "@hookform/error-message";
import { setValueAsNumber } from "@utils/formUtils";
import useRegistrationForm from "@hooks/index";

const RegistrationForm = () => {
  const { register, handleSubmit, errors, isValid, submit } =
    useRegistrationForm();

  return (
    <Form onSubmit={handleSubmit(submit)}>
      <FormControl>
        <Label htmlFor="firstName">First name</Label>
        <TextInput
          id="firstName"
          {...register("firstName")}
          aria-invalid={errors.firstName ? "true" : "false"}
        />
        <Error errors={errors} name="firstName" as={ErrorMessage} />
      </FormControl>
      <FormControl>
        <Label htmlFor="lastName">Last name</Label>
        <TextInput
          id="lastName"
          {...register("lastName")}
          aria-invalid={errors.lastName ? "true" : "false"}
        />
        <Error errors={errors} name="lastName" as={ErrorMessage} />
      </FormControl>
      <FormControl>
        <Label htmlFor="age">Age</Label>
        <NumberInput
          id="age"
          {...register("age", {
            setValueAs: setValueAsNumber,
          })}
          aria-invalid={errors.age ? "true" : "false"}
        />
        <Error errors={errors} name="age" as={ErrorMessage} />
      </FormControl>
      <FormControl>
        <Label htmlFor="email">Email</Label>
        <EmailInput
          id="email"
          {...register("email")}
          aria-invalid={errors.email ? "true" : "false"}
        />
        <Error errors={errors} name="email" as={ErrorMessage} />
      </FormControl>
      <FormControl>
        <Label htmlFor="password">Password</Label>
        <PasswordInput
          id="password"
          {...register("password")}
          aria-invalid={errors.password ? "true" : "false"}
        />
        <Error errors={errors} name="password" as={ErrorMessage} />
      </FormControl>
      <FormControl>
        <Label htmlFor="confirmPassword">Confirm password</Label>
        <PasswordInput
          id="confirmPassword"
          {...register("confirmPassword")}
          aria-invalid={errors.confirmPassword ? "true" : "false"}
        />
        <Error errors={errors} name="confirmPassword" as={ErrorMessage} />
      </FormControl>

      <FormControl row>
        <CheckboxInput
          id="subscribeToNewsletter"
          {...register("subscribeToNewsletter")}
          defaultChecked
        />
        <Label htmlFor="subscribeToNewsletter">Subscribe to newsletter</Label>
      </FormControl>

      <Button type="submit" fullWidth disabled={!isValid}>
        Submit
      </Button>
    </Form>
  );
};

export default RegistrationForm;
