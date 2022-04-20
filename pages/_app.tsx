import { useState, useEffect } from 'react';

import type { AppContext, AppProps } from 'next/app'
import { CssBaseline, Theme, ThemeProvider } from '@mui/material'
import { darkTheme, lightTheme, customTheme } from '../themes';
import Cookies from 'js-cookie';


interface Props extends AppProps {
  theme: string
}


function MyApp({ Component, pageProps, theme = 'dark' }: Props) {

  // console.log({ theme });

  const [currentTheme, setCurrentTheme] = useState(lightTheme);
  //NOTE: el servidor no ejecuta codigo que esta dentro de useEffect
  //revisa la cookie y retorna el theme al primer render
  useEffect(() => {
    const cookieTheme = Cookies.get('theme') || 'light'
    const selectedTheme = cookieTheme === 'light'
      ? lightTheme
      : (cookieTheme === 'dark')
        ? darkTheme
        : customTheme;

    setCurrentTheme(selectedTheme)
  }, []);


  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

//NOTE: al usar getInitialProps desactiva staticPaths y staticProps
// MyApp.getInitialProps = async (appContext: AppContext) => {

//   const { theme } = appContext.ctx.req ? (appContext.ctx.req as any).cookies : { theme: 'light' }
//   console.log('getInitialProps', theme);
//   const validThemes = ['light', 'dark', 'custom']


//   return {
//     theme: validThemes.includes(theme) ? theme : 'dark'
//   }
// }


export default MyApp
