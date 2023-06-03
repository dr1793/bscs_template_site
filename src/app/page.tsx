'use client';
import Image from 'next/image'
import React from 'react';
import styles from './page.module.css'
import client from '../lib/apolloClient'
import { gql, useQuery } from '@apollo/client'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function Home() {

  //Use a promise and a timeout to make the backdrop last a second longer
  const { loading, error, data } = useQuery(query, { client });


  return (
    <React.Fragment>
      {/* Backdrop should be more opaque and should fade out when done loading */}
      <Backdrop
        sx={{ color: '#fff', zIndex: 10 }}
        open={loading}
      >
        <CircularProgress color="inherit" size={400} />
      </Backdrop>


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
        </div>
      </main>
    </React.Fragment>
  )

}

const query = gql`
  query homeCollectionQuery {
    homeCollection {
      items {
        sys {
          id
        }
        header
      }
    }
  }`;