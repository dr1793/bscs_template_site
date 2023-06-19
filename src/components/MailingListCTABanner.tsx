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

export default function MailingListCTABanner({
  className,
}: {
  className: string;
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
      <SectionContainer pageColor="bg-amber-800">
        {" "}
        <form
          action="#"
          method="POST"
          className=""
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-row justify-between align-center ">
            <div className="flex items-center justify-center w-full">
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
    </div>
  );
}
