import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Banner from './components/Banner/Banner'
import FrontEnd from './components/FrontEnd/FrontEnd'
import Menu from './components/Menu/Menu'
import Videos from './components/Videos/Videos'
import AboutMe from './components/AboutMe/AboutMe'
import Footer from './components/Footer/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>

        <meta charSet="utf-8" />
        <title>ZSMDesign Web Development</title>
        <meta http-equiv="content-language" content="en" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        
        <meta name="author" content="Miklós Zsámba" />
        <meta name="copyright" content="Copyright Miklós Zsámba" />
        <meta name="googlebot" content="all" />
        <meta name="robots" content="all" />
        
        <meta name="description" content="Web development, Graphic design, Brand development, Video production." />
        <meta name="keywords" content="zsmdesign, front-end, back-end, web development, graphic design, illustration, responsive, video editing, cross-browser" />
        
        <meta property="og:site_name" content="ZSMDesign" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://zsmdesign.com/" />
        <meta property="og:title" content="ZSMDesign Web Development" />
        <meta property="og:description" content="Web development, Graphic design, Brand development, Video production." />
        
        <meta property="og:image" content="http://zsmdesign.com/public/og-hero-poster.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1922" />
        <meta property="og:image:height" content="1080" />
        <meta property="og:image:alt" content="ZSMDesign Landing Page" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>

      <main>
        <Menu />
        <Banner />

        <FrontEnd />
        <Videos />
        <AboutMe />

        <Footer />
      </main>
    </>
  )
}
