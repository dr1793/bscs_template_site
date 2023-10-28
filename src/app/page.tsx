import Image from "next/image";
import React from "react";
import styles from "./page.module.css";
import { getRevalidateQuery } from "@/lib/apolloClient";
import { gql } from "@apollo/client";
import Banner from "@/components/Banner";
import Carousel from "@/components/Carousel";
import About from "@/components/About";

export default async function Home() {
  //Use a promise and a timeout to make the backdrop last a second longer
  const { data } = await getRevalidateQuery(query);
  const hero = data?.homeCollection?.items[0];

  const headerFontSize = `calc(${(7- 1) * 1.2}vw + 1rem)`;
  const subheaderFontSize = `calc(${(4- 1) * 1.2}vw + 1rem)`;


  return (
    <React.Fragment>
      {/* Backdrop should be more opaque and should fade out when done loading */}
      {/* <Backdrop
        sx={{ color: '#fff', zIndex: 10 }}
        open={false}
      >
        <CircularProgress color="inherit" size={400} />
      </Backdrop> */}

      <main>
        <div
          className="h-screen bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${hero.picture.url})`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-25"> </div>
          <div className="relative p-4 text-white flex flex-col items-center justify-center h-full">
          <p className="text-white font-grotesk" style={{ fontSize: headerFontSize}}>{hero.header}</p>
          <p className="text-bscs-yellow font-grotesk" style={{ fontSize: subheaderFontSize}}>{hero.headerSubText}</p>
          </div>
        </div>
        <div className={styles.grid}>
          <Banner id="home"></Banner>
          <Carousel id="selected-works"></Carousel>
          <About id="about"></About>
        </div>
      </main>
    </React.Fragment>
  );
}

const query = gql`
  query pageQuery {
    homeCollection {
      items {
        sys {
          id
        }
        header
        headerSubText
        picture {
          url
        }
      }
    }
  }
`;
