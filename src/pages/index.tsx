import Head from 'next/head';
import { QRCode } from '../components/QRCode';

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="A simple QR Code component." />
        <meta name="author" content="Wendell Kenneddy" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="QRComp" />
        <meta property="og:site_name" content="QRComp" />
        <meta property="og:description" content="A simple QR Code component." />
        <meta property="og:url" content="https://qrcompwk.vercel.app/" />
        <meta property="og:locale" content="en-US" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content="QRComp" />
        <meta
          property="twitter:description"
          content="A simple QR Code component."
        />
        <meta property="twitter:url" content="https://qrcompwk.vercel.app/" />
        <title>QRComp</title>
      </Head>

      <QRCode />

      <div className="flex flex-col items-center justify-center gap-4 px-2 my-4">
        <h2 className="text-dark-blue font-bold text-xl text-center">
          Improve your front-end skills by building projects
        </h2>

        <p className="text-center text-grayish-blue">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </>
  );
}
