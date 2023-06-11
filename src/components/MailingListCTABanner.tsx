"use client";
import React, { useState } from "react";
import SectionContainer from "./SectionContainer";
import Input from "./utilities/Input";
import { MAILING_LIST_EMAIL } from "../lib/constants";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

export default function MailingListCTABanner() {
  const methods = useForm({ mode: "onBlur" });
  const [loading, setLoading] = useState<boolean>(false);
  const [serverError, setServerError] = useState<boolean>(false);
  const [successSubmit, setSuccessSubmit] = useState<boolean>(false);

  const {
    handleSubmit,
    reset,
  } = methods;

  const onSubmit: SubmitHandler<FieldValues> = async (values: FieldValues) => {
    const email = values?.email;
    if (!email) return;
    setServerError(false)

    setLoading(true)
    console.log(email)
    try {
      //Send the email to the service 
      setSuccessSubmit(true)
      reset()
    } catch (err) {
      console.log(err)
      setServerError(true)

    }
    setLoading(false)

  };

  return (
    <SectionContainer pageColor="bg-amber-800">
      {" "}
      <form
        action="#"
        method="POST"
        className=""
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-row justify-between align-center">
          <div className="flex items-center justify-center">
            Join our mailing list!
          </div>
          <FormProvider {...methods}>
            <div className="flex flex-col">
              <Input {...MAILING_LIST_EMAIL} />
            </div>
          </FormProvider>
          <button type="submit" className="hover:text-white">
            {" "}
            Join{" "}
          </button>
        </div>
      </form>
    </SectionContainer>
  );
}
