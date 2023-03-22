import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'Merriweather', serif`,
    body: `'Open Sans', sans-serif`,
  },
})

export default function App({ Component, pageProps }: AppProps) {
  return (<ChakraProvider theme={theme}>
    <Component {...pageProps} />
    </ChakraProvider>)
}
