"use client";
import React, { useState } from "react";
import SectionContainer from "./SectionContainer";
import Input from "./utilities/Input";
import { MAILING_API_URL, MAILING_LIST_EMAIL } from "../lib/constants";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import axios from "axios";
import BSCSButton from "./utilities/button";

export default function MailingListCTABanner({
  className,
  buttonText = "Sign Up",
  placeholder = "Email Address",
}: {
  className: string;
  buttonText?: string;
  placeholder?: string;
}) {
  const methods = useForm({ mode: "onBlur" });
  const [loading, setLoading] = useState<boolean>(false);
  const [serverError, setServerError] = useState<boolean>(false);
  const [successSubmit, setSuccessSubmit] = useState<boolean>(false);

  const { handleSubmit, reset } = methods;

  const onSubmit: SubmitHandler<FieldValues> = async (values: FieldValues) => {
    const email = values?.email;
    if (!email) return;

    setServerError(false);
    setLoading(true);

    try {
      //Send the email to the service
      const response = await axios.post(MAILING_API_URL, { Email: email });
      setSuccessSubmit(true);
      reset();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error.message);
        if (error.response) {
          console.error(`Status: ${error.response.status}`);
          console.error(`Data: ${error.response.data}`);
        }
        return;
      }

      console.log(error);
      setServerError(true);
    }
    setLoading(false);
  };

  return (
    <div className={`${className}`}>
      <form
        action="#"
        method="POST"
        className=""
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-row justify-between items-center">
          <FormProvider {...methods}>
            <div className="flex flex-col items-center">
              <Input {...MAILING_LIST_EMAIL} label="" placeholder={placeholder}/>
            </div>
          </FormProvider>
            <BSCSButton
              type="primary"
              buttonType="submit"
              size="reg"
              text={buttonText}
            />
        </div>
      </form>
    </div>
  );
}
