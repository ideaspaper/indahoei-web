type Routes = 'root' | 'home' | 'about' | 'projects' | 'speaking' | 'uses';

type AppPathMap = {
  [K in Routes]: Readonly<{
    path: string;
    getHref: () => string;
  }>;
};

export const APP_PATH_MAP: AppPathMap = {
  root: {
    path: '/',
    getHref: () => '/',
  },
  home: {
    path: 'home',
    getHref: () => '/home',
  },
  about: {
    path: 'about',
    getHref: () => '/about',
  },
  projects: {
    path: 'projects',
    getHref: () => '/projects',
  },
  speaking: {
    path: 'speaking',
    getHref: () => '/speaking',
  },
  uses: {
    path: 'uses',
    getHref: () => '/uses',
  },
};
