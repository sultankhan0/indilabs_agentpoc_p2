import { Field } from "formik";
import React, {ChangeEvent} from "react";

type Props = {
  type?: string | null;
  placeholder?: string | null;
  name: string | null;
  value?: string | null;
  onChange?:(e: ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: Props) => {
  return (
    <Field
      type={props.type}
      id="#"
      name={props.name}
      className="w-full border border-zinc-500 px-4 py-5 rounded text-base outline-0 text-xl placeholder:text-base placeholder:text-zinc-700"
      placeholder={props.placeholder}
      autoComplete="new-password"
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default Input;
