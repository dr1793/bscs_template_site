"use client";
import React, { useState } from "react";
import {
  SubmitHandler,
  useForm,
  FieldValues,
  FormProvider,
} from "react-hook-form";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import Input from "./Input";
import {
  BSCS_EMAIL,
  CONTACT_FORM_VALUES,
  MESSAGE_API_URL,
} from "@/lib/constants";

const ContactFormComponent = () => {
  const methods = useForm();
  const {
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = methods;

  const [captchaValue, setCaptchaValue] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const onCaptchaChange = (token: string | null): void => {
    if (!token) return;
    setCaptchaValue(token);
  };

  const onSubmit: SubmitHandler<FieldValues> = async (values: FieldValues) => {
    const data = {
      "Google Token": captchaValue,
      "Message Data": {
        Name: values["full-name"],
        Email: values["email"],
        Subject: values["subject"],
        Message: values["message"],
        Phone: values["phone-number"],
        Site: "Bed-Stuy Clothes Swap",
      },
      receiver: BSCS_EMAIL,
    };

    setLoading(true);

    try {
      const response = await axios.post(MESSAGE_API_URL, data);
      if (response.status === 201) {
        reset()
        setLoading(false);
        return;
      }
    } catch (err) {
      console.log(err);
    }

    return;
  };

  return (
    <form
      action="#"
      method="POST"
      className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
        <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
          <FormProvider {...methods}>
            {CONTACT_FORM_VALUES.map((value) => {
              return (
                <React.Fragment>
                  <Input {...value} />
                  {errors[value.tagLabel] && (
                    <span>{String(errors[value.tagLabel]?.message)}</span>
                  )}
                </React.Fragment>
              );
            })}
          </FormProvider>
        </div>
        <div className="mt-8 flex justify-around">
          <div className="flex flex-col justify-between">
            <ReCAPTCHA
              sitekey="6LfcJh4aAAAAAM1sI9Z2jj2WXgjtHbLRGzWMCdzQ"
              onChange={onCaptchaChange}
            />
            <button
              type="submit"
              className="mt-6 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Send message
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactFormComponent;
