import Button from "../../components/Button";
import CheckboxInput from "../../components/CheckboxInput";
import EmailInput from "../../components/EmailInput";
import Label from "../../components/Label";
import NumberInput from "../../components/NumberInput";
import PasswordInput from "../../components/PasswordInput";
import TextInput from "../../components/TextInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const validationSchema = z.object({
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
      required_error: "Age is required",
    })
    .int("Age must be an integer")
    .nonnegative("Age must not be a negative number"),
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
      {errors?.firstName?.message && <p>{errors.firstName.message}</p>}

      <Label htmlFor="lastName">Last name</Label>
      <TextInput
        id="lastName"
        {...register("lastName")}
        aria-invalid={errors.lastName ? "true" : "false"}
      />
      {errors?.lastName?.message && <p>{errors.lastName.message}</p>}

      <Label htmlFor="age">Age</Label>
      <NumberInput id="age" />

      <Label htmlFor="email">Email</Label>
      <EmailInput id="email" />

      <Label htmlFor="password">Password</Label>
      <PasswordInput id="password" />

      <Label htmlFor="confirmPassword">Confirm password</Label>
      <PasswordInput id="confirmPassword" />

      <Label htmlFor="subscribeToNewsletter">Subscribe to newsletter</Label>
      <CheckboxInput id="subscribeToNewsletter" defaultChecked />

      <Button type="submit" fullWidth disabled={!isValid}>
        Submit
      </Button>
    </form>
  );
};

export default RegistrationForm;
