import Image from 'next/image'
import React from 'react';
import styles from './page.module.css'
import { getRevalidateQuery } from "@/lib/apolloClient";
import { gql } from '@apollo/client'
import Banner from '@/components/Banner';
import Carousel from '@/components/Carousel';
import About from '@/components/About';

export default async function Home() {

  //Use a promise and a timeout to make the backdrop last a second longer
  const { data } = await getRevalidateQuery(query);

  return (
    <React.Fragment>
      {/* Backdrop should be more opaque and should fade out when done loading */}
      {/* <Backdrop
        sx={{ color: '#fff', zIndex: 10 }}
        open={false}
      >
        <CircularProgress color="inherit" size={400} />
      </Backdrop> */}


      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            {data?.homeCollection?.items[0].header}
          </p>
        </div>
        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>
        <div className={styles.grid}>
          <Banner id='home'></Banner>
          <Carousel id='selected-works'></Carousel>
          <About id='about'></About>
        </div>
      </main>
    </React.Fragment>
  )
}

const query = gql`
  query pageQuery {
    homeCollection {
      items {
        sys {
          id
        }
        header
      }
    }
  }`;