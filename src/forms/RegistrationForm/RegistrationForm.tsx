import Button from "../../components/Button";
import CheckboxInput from "../../components/CheckboxInput";
import EmailInput from "../../components/EmailInput";
import Label from "../../components/Label";
import NumberInput from "../../components/NumberInput";
import PasswordInput from "../../components/PasswordInput";
import TextInput from "../../components/TextInput";
import ErrorMessage from "../../components/ErrorMessage";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage as Error } from "@hookform/error-message";
import { z } from "zod";
import { setValueAsNumber } from "../../utils/formUtils";

const validationSchema = z
  .object({
    firstName: z
      .string()
      .nonempty("First name is required.")
      .min(2, "First name must be at least 2 characters in length.")
      .max(30, "First name must no longer than 30 characters in length."),
    lastName: z
      .string()
      .nonempty("Last name is required.")
      .min(2, "Last name must be at least 2 characters in length.")
      .max(30, "Last name must no longer than 30 characters in length."),
    age: z
      .number({
        required_error: "Age is required.",
      })
      .int("Age must be a whole number and not decimal.")
      .nonnegative("Age must not be a negative number."),
    email: z
      .string()
      .nonempty("Email address is required.")
      .email("Email address is invalid."),
    password: z
      .string()
      .nonempty("Password is required.")
      .min(6, "Password must be a minimum of 6 characters.")
      .max(15, "Password must be a maximum of 15 characters."),
    confirmPassword: z.string().nonempty("Confirm password is required."),
  })
  .refine((values) => values.password === values.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

type FormValues = z.infer<typeof validationSchema>;

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: "all",
    resolver: zodResolver(validationSchema),
  });

  const submit = (values: FormValues) => console.log(values);

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Label htmlFor="firstName">First name</Label>
      <TextInput
        id="firstName"
        {...register("firstName")}
        aria-invalid={errors.firstName ? "true" : "false"}
      />
      <Error errors={errors} name="firstName" as={ErrorMessage} />

      <Label htmlFor="lastName">Last name</Label>
      <TextInput
        id="lastName"
        {...register("lastName")}
        aria-invalid={errors.lastName ? "true" : "false"}
      />
      <Error errors={errors} name="lastName" as={ErrorMessage} />

      <Label htmlFor="age">Age</Label>
      <NumberInput
        id="age"
        {...register("age", {
          setValueAs: setValueAsNumber,
        })}
        aria-invalid={errors.age ? "true" : "false"}
      />
      <Error errors={errors} name="age" as={ErrorMessage} />

      <Label htmlFor="email">Email</Label>
      <EmailInput
        id="email"
        {...register("email")}
        aria-invalid={errors.email ? "true" : "false"}
      />
      <Error errors={errors} name="email" as={ErrorMessage} />

      <Label htmlFor="password">Password</Label>
      <PasswordInput
        id="password"
        {...register("password")}
        aria-invalid={errors.password ? "true" : "false"}
      />
      <Error errors={errors} name="password" as={ErrorMessage} />

      <Label htmlFor="confirmPassword">Confirm password</Label>
      <PasswordInput
        id="confirmPassword"
        {...register("confirmPassword")}
        aria-invalid={errors.confirmPassword ? "true" : "false"}
      />
      <Error errors={errors} name="confirmPassword" as={ErrorMessage} />

      <Label htmlFor="subscribeToNewsletter">Subscribe to newsletter</Label>
      <CheckboxInput id="subscribeToNewsletter" defaultChecked />

      <Button type="submit" fullWidth disabled={!isValid}>
        Submit
      </Button>
    </form>
  );
};

export default RegistrationForm;
