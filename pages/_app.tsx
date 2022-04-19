import type { AppContext, AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { darkTheme, lightTheme, customTheme } from '../themes';

function MyApp({ Component, pageProps, ...rest }: AppProps) {

  console.log({ rest });


  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}


MyApp.getInitialProps = async (appContext: AppContext) => {

  const { theme } = appContext.ctx.req ? (appContext.ctx.req as any).cookies : { theme: 'light' }
  console.log('getInitialProps', theme);
  const validThemes = ['light', 'dark', 'custom']


  return {
    theme: validThemes.includes(theme) ? theme : 'dark'
  }
}


export default MyApp
