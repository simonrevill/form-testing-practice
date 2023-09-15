import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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
    subscribeToNewsletter: z.boolean().optional(),
  })
  .refine((values) => values.password === values.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

type FormValues = z.infer<typeof validationSchema>;

const useRegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: "all",
    resolver: zodResolver(validationSchema),
  });

  const submit = (values: FormValues) => console.log(values);

  return {
    register,
    handleSubmit,
    errors,
    isValid,
    submit,
  };
};

export default useRegistrationForm;
