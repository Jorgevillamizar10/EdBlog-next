import Document, { Html, Head, Main, NextScript} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx){ // obtener propiedades del lado del servidor
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render(){
    return(
      <Html lang="es">
        <Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Head>
      </Html>
    )
  }
}

export default MyDocument