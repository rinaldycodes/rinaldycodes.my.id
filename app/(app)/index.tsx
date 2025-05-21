import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Head from "expo-router/head";

import WelcomeView from '@/src/_views/WelcomeView'
import { MyEnv } from '@/src/utils/MyEnv';

export default function Index() {
  return (
    <>
      <Head>
        <title>{MyEnv.APP_NAME}</title>
        <meta name="description" content={MyEnv.APP_DESCRIPTION} />
        
        {/* Additional SEO Meta Tags */}
        <meta name="keywords" content="web development, mobile app development, coding tutorials, JavaScript, React, React Native, Laravel, Next.js, tech blog, software development" />
        <meta name="author" content="Rinaldycodes" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph Meta Tags for Social Media Preview */}
        <meta property="og:title" content={MyEnv.APP_NAME} />
        <meta property="og:description" content={MyEnv.APP_DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={MyEnv.APP_URL} />
        <meta property="og:image" content="https://example.com/og-image.jpg" /> {/* Change this URL to your image URL */}
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={MyEnv.APP_NAME} />
        <meta name="twitter:description" content={MyEnv.APP_DESCRIPTION} />
        <meta name="twitter:image" content="https://example.com/twitter-image.jpg" /> {/* Change this URL to your image URL */}
        
        {/* Viewport for responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <WelcomeView />
    </>
  )
}

const styles = StyleSheet.create({})
