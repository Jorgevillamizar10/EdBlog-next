import fetch from 'node-fetch'
import Post from '../components/blog/Post'
import { NextSeo } from 'next-seo'

export default function Home({ posts }) {
  return (
    <div>
      <NextSeo 
        title="Bienvenido a EDblog"
        description="Edblog es una creacion del curso de Next en EDteam"
        openGraph={{
          url: "https://ed.team",
          title: "Bienvenido a EDblog",
          description: "Edblog es una creacion del curso de Next en EDteam",
          images: [
            {
              url: "https://ed.team/images/algo.jpg",
              width: 1280,
              height: 720,
              alt: "Foto de perfil de EDteam"
            },
            {
              url: "https://ed.team/images/algo.jpg",
              width: 1280,
              height: 720,
              alt: "Foto de perfil de EDteam"
            },
          ],
          site_name: "EDblog"
        }}
        twitter={{
          handle: "@edteamlat",
          site: "@edteamlat",
          cardType: "summary_large_image"
        }}
      />
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
