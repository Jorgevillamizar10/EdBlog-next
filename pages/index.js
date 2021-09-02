import Head from 'next/head'
import fetch from 'node-fetch'
import Post from '../components/blog/Post'

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Home | {process.env.SITE_NAME}</title>
      </Head>
      <main>
        <h1>{process.env.SITE_NAME}</h1>
        <div className="ed-grid m-grid-3 row-gap">
          {
            posts.map((post, index) => (
              <Post key={index} data={post}/>
            ))
          }
        </div>
      </main>
    </div>
  )
}

//esta peticion corre del lado del servidor StaticProps nos inyecta las props al componente del lado del servidor
export async function getStaticProps(){
  const response = await fetch(`${process.env.API_BLOG}/posts`)
  const posts = await response.json()
  return {
    props: {
      posts
    }
  }
}
