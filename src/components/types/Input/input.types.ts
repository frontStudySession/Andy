import { FieldError } from "react-hook-form";
import { UseFormRegisterReturn } from "react-hook-form/dist/types/form";

export type TextInputType = {
  id: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  placeholder: string;
};
