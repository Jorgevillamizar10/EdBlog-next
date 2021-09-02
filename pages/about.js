import Head from 'next/head'

export default function About() {
  return (
    <div>
      <Head>
        <title>About | {process.env.SITE_NAME}</title>
      </Head>
      <main>
        <h1>About us</h1>
        <span>Bienvenidos a EDblog by Jorge V</span>
      </main>
    </div>
  )
}
