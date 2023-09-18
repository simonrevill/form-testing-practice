import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormValues, validationSchema } from "./validationSchema";

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
