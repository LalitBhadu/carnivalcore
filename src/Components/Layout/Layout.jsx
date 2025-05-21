"use client";

import React, { useEffect, useState } from 'react';
import Header from './../Header/Navbar';
import Footer from './../Footer/Footer';
import Head from "next/head";
import { usePathname } from 'next/navigation';
import Loader from "./Loader"
import {AuthProvider} from "./../Context/AuthContext"
import { Toaster } from 'react-hot-toast';



const Layout = ({ children }) => {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 900);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      <Head>
        <title>Carnival Core Trade LLC</title>
        <meta name="description" content="Carnival Core Trade LLC" />
        <meta name="keywords" content="feelinghub, Share your feeling" />
        <meta name="author" content="Lalit Bhadu (89305-36805)" />
      </Head>

      {loading && <Loader />}

      <div className="flex flex-col min-h-screen">
       <Toaster position="top-right" reverseOrder={false} />
        <Header />
        <main className="flex-grow">
         <AuthProvider>
        {children}
        </AuthProvider>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
