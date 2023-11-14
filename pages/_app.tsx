import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css'; 

function MyApp({ Component, pageProps }: any) {
  return (
    <SessionProvider session={pageProps.session}>
      <div className="flex flex-col">
          <Component {...pageProps} />
        </div>
    </SessionProvider>
  );
}

export default MyApp;
