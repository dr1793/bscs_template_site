import React, { useState } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { PatternFormat } from "react-number-format";
import { ContactFormValue } from "@/lib/constants";

interface InputProps extends ContactFormValue {
  placeholder?: string | undefined;
  labelClasses?: string;
  inputClasses?: string;
}

export default function Input({
  label,
  tagLabel,
  type,
  autoComplete,
  placeholder,
  required = false,
  textArea = false,
  formatter = "",
  labelClasses,
  inputClasses,
  validationPattern,
}: InputProps) {
  const { register, control, formState: { errors } } = useFormContext();

  const [value, setValue] = useState<string>("");

  const inputStyles = `block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${inputClasses}`;

  return (
    <React.Fragment>
      {label &&
        <label
          htmlFor={tagLabel}
          className={`block text-sm font-semibold leading-6 text-gray-900 ${labelClasses}`}
        >
          {label}
        </label>
      }
      <div className="">
        {textArea ? (
          <textarea
            {...register(tagLabel, {
              required: required && "Required",
              pattern: validationPattern,
            })}
            name={tagLabel}
            id={tagLabel}
            rows={4}
            className={inputStyles}
            defaultValue={""}
          />
        ) : formatter ? (
          <Controller
            defaultValue={""}
            render={({ field: { onChange, name, onBlur, value } }) => (
              <PatternFormat
                onChange={onChange}
                format={formatter}
                name={name}
                value={value}
                className={inputStyles}
              />
            )}
            rules={{
              required: required,
              pattern: validationPattern,
            }}
            name={tagLabel}
            control={control}
          />
        ) : (
          <input
            {...register(tagLabel, {
              required: required && "Required",
              pattern: validationPattern,
            })}
            type={type}
            name={tagLabel}
            id={tagLabel}
            placeholder={placeholder}
            autoComplete={autoComplete}
            className={inputStyles}
          />
        )}
      </div>
      {errors[tagLabel] && (
        <div className="text-red-700">
          {String(errors[tagLabel]?.message)}
        </div>
      )}
    </React.Fragment>
  );
}
