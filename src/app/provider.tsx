import {HelmetProvider} from '@dr.pogodin/react-helmet';
import {ReactNode, Suspense} from 'react';

import {ThemeProvider} from '@/app/contexts/theme-context';
import {Spinner} from '@/components/spinner';

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({children}: AppProviderProps) => {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen w-screen items-center justify-center">
          <Spinner size="xl" />
        </div>
      }
    >
      <HelmetProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </HelmetProvider>
    </Suspense>
  );
};
