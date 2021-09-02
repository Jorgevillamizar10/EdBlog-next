import Head from 'next/head'

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact | {process.env.SITE_NAME}</title>
      </Head>
      <main>
        <h1>Contact us (Pagina de Contacto)</h1>
        <span>Bienvenidos a EDblog by Jorge V</span>
      </main>
    </div>
  )
}
