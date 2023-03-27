import { Html, Head, Main, NextScript } from 'next/document'
import Navbar from '../components/Landing/navbar'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Open+Sans:wght@600;700&display=swap" rel="stylesheet" />

      </Head>
      <body>
        <Navbar />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
