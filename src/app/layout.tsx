"use client"
import React, { ReactElement } from "react"; 
import {Toaster } from 'sonner'
import "./globals.css";
// import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Layout, FixedPlugin } from "@/components"; 
import AOSWrapper from '../components/AOSWrapper'; 
import { Provider } from "react-redux";
import store from "../store"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

// export const metadata: Metadata = {
//   title: "Ormbgo",
//   description: "one branch many roots org",
// };

export default function RootLayout({
  children,
}: {
  children: ReactElement; // Changing to ReactElement
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          data-site="YOUR_DOMAIN_HERE"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        ></script>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={roboto.className}>
        <AOSWrapper> {/* Wrapping with AOSWrapper */}
          <Layout>
            <>
            <Provider store={store}>
              {children}
              <Toaster />
              <FixedPlugin />
              </Provider>
            </>
          </Layout>
        </AOSWrapper> 
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </body>
    </html>
  );
}
