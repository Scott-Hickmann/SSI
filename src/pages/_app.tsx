import { ChakraProvider } from '@chakra-ui/react';
import { fonts } from 'client/fonts'; // Ensure this path is correct
import { theme } from 'client/theme';
import { trpc } from 'client/trpc';
import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-archivo: ${fonts.archivo.style.fontFamily};
          --font-workbench: ${fonts.workbench.style.fontFamily};
        }
      `}</style>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default trpc.withTRPC(App);
