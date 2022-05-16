import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../components/styles/Global'

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#ffffff',
    footer: '#003333',
  },
}

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Component {...pageProps} />
      </>
    </ThemeProvider>
  )
}

export default MyApp
