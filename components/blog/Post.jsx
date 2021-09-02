import Link from 'next/link'

export default function Post({ data }){
  return(
    <article className="s-radius-1 s-pxy-4 s-shadow-bottom course-card background s-shadow-card-micro white-color nowrap s-column s-mb-0">
      <h2>
        { data.title }
      </h2>
      <p>{ data.body }</p>
      <span>Escrito por el usuario: { data.userId }</span>
      <Link href={`/blog/${data.id}`}>
        Leer màs
      </Link>
    </article>
  )
}