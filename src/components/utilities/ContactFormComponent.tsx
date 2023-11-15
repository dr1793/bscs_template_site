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
import BSCSButton from "./button";

const ContactFormComponent = () => {
  const methods = useForm({ mode: "onBlur" });
  const {
    handleSubmit,
    formState: { isValid, errors },
    reset,
    setValue,
  } = methods;

  const [captchaValue, setCaptchaValue] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [serverError, setServerError] = useState<boolean>(false);
  const [successSubmit, setSuccessSubmit] = useState<boolean>(false);

  const onCaptchaChange = (token: string | null): void => {
    if (!token) return;
    setCaptchaValue(token);
  };

  const onSubmit: SubmitHandler<FieldValues> = async (values: FieldValues) => {
    setServerError(false);
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
      Receiver: BSCS_EMAIL,
    };

    setLoading(true);

    try {
      const response = await axios.post(MESSAGE_API_URL, data);
      if (response.status === 201) {
        setSuccessSubmit(true);
        reset();
        setLoading(false);
        return;
      }
    } catch (err) {
      console.log(err);
      setServerError(true);
      setLoading(false);
    }

    return;
  };

  return (
    <form
      action="#"
      method="POST"
      className="px-6 pb-12 pt-10 sm:pt-20 sm:pb-32 lg:px-8 lg:py-48"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="lg:mr-0 lg:max-w-lg">
        <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
          <FormProvider {...methods}>
            {CONTACT_FORM_VALUES.map((value, i) => {
              return (
                <div
                  className={`${value?.twoCols ? "" : `sm:col-span-2`} font-oswald lg:text-5xl`}
                  key={`${i}-${value.label}`}
                >
                  <Input {...value} />
                </div>
              );
            })}
          </FormProvider>
        </div>
        <div className="mt-8 flex justify-around">
          <div className="flex flex-col items-center justify-between">
            <ReCAPTCHA
              className={`${!isValid && "hidden"} mb-6`}
              sitekey="6LfcJh4aAAAAAM1sI9Z2jj2WXgjtHbLRGzWMCdzQ"
              onChange={onCaptchaChange}
            />
            <div
              className={`${!serverError && "hidden"
                } text-red-700 px-4 mb-2 relative`}
            >
              We&apos;re having trouble communicating with our servers. Try again
              later!
            </div>
            <BSCSButton
              buttonType="submit"
              type="primary"
              size='lg'
              styles={`
                ${serverError && " pointer-events-none bg-gray-500 border-none"}
                ${loading && " pointer-events-none border-none"} 
                ${successSubmit && "bg-green-500 pointer-events-none border-none"}
              `}
              text={
                loading
                  ? // <LoadingSpinner size={35} />
                  "loading"
                  : successSubmit
                    ? "Got your message!"
                    : " Send Message "
              }
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactFormComponent;
