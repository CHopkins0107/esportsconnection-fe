import { type NextPage } from "next";
import Head from "next/head";
// import { signIn, signOut, useSession } from "next-auth/react";
// import { api } from "~/utils/api";
import Header from "~/components/Header";
import Podcast from "~/components/Podcast";
import News from "~/components/News";
import AdSpace from "~/components/AdSpace";
import Events from "~/components/Events";
import GuestForm from "~/components/GuestForm";
import Footer from "~/components/Footer";
import { NextSeo } from "next-seo";

// For Web scrapping
import { useEffect, useState } from 'react';
import axios from 'axios';
import { fetchRSS } from '../utils/rssParser';


const Home: NextPage = () => {

  const [summary, setSummary] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/summarize');
        setSummary(response.data.summary);
      } catch (error) {
        console.error('Error:', error.response.data.error);
        setSummary('');
      }
    };

    fetchData();
  }, []);


  return (
    <>
      <Head>
        <NextSeo
          title="Esports Connection"
          themeColor="#c7d2fe"
        />
        <meta name="google-adsense-account" content="ca-pub-9317075272992115"></meta>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-indigo-200">
        <div className="flex flex-col items-center justify-center gap-4 w-full">
          <div className="container md:max-w-[120ch]">
            <Header />
            <Podcast />
            <News />
            <AdSpace />
            <Events/>
            <GuestForm/>
          </div>
          <div>
          {summary && (
            <div>
              <h1>Article Summary</h1>
              <p>{summary}</p>
            </div>
            )}
          </div>
          <Footer/>
        </div>
        
      

      </main>
        
    </>
  );
};




export default Home;

