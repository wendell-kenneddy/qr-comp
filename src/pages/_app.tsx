import type { AppProps } from 'next/app';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="bg-white w-[90vw] max-w-[300px] mx-auto rounded-xl p-4 shadow-md my-7">
      <Component {...pageProps} />
    </main>
  );
}
