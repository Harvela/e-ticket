import { UserConfig, appWithTranslation } from 'next-i18next';
import '../styles/global.css';

import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
// ts-ignore
import nextI18NextConfig from '../../next-i18next.config.js';


const emptyInitialI18NextConfig: UserConfig = {
  i18n: {
    defaultLocale: nextI18NextConfig.i18n.defaultLocale,
    locales: nextI18NextConfig.i18n.locales,
  },
};

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => (
  <QueryClientProvider client={queryClient}>
    <Component {...pageProps} />
  </QueryClientProvider>
);

export default appWithTranslation(MyApp, emptyInitialI18NextConfig);
