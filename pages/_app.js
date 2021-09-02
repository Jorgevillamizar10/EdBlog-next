import Header from "../components/sections/Header"
import "../styles/styles.scss"

function MyApp({Component, pageProps}) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp