import type { AppContext, AppProps } from 'next/app'
import { CssBaseline, Theme, ThemeProvider } from '@mui/material'
import { darkTheme, lightTheme, customTheme } from '../themes';


interface Props extends AppProps {
  theme: string
}


function MyApp({ Component, pageProps, theme = 'dark' }: Props) {

  // console.log({ theme });
  const currentTheme: Theme = theme === 'light'
    ? lightTheme
    : (theme === 'dark')
      ? darkTheme
      : customTheme


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
