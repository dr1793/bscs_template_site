import React, { use } from "react";
import Lottie from "lottie-react";
// import { gql, useQuery } from "@apollo/client";
import * as anim from "../../..//public/loadingFlower.json";

export default async function LoadingSpinner({ size }: { size: number }) {
  //   const { data } = await useQuery(query);

  return (
    <Lottie
      style={{ height: size }}
      animationData={anim}
      loop={true}
      alt="loading spinner animation"
    />
  );
}

// const query = gql`
//   query utilitiesEntryQuery {
//     utilities(id: "42OfNrcdqkAoCfOi34077X") {
//       lottieAnimation
//     }
//   }
// `;
