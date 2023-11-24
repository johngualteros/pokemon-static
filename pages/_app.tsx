import type { AppProps } from 'next/app'
import '@/styles/global.css'
import {NextUIProvider} from "@nextui-org/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <main className='dark text-foreground bg-background h-full min-h-screen'>
        <Component {...pageProps} />
      </main>
    </NextUIProvider>
  )
}
