import { AppProps} from 'next/app'
import 'src/styles/main.scss'

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}
  
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  
  export default MyApp