import Link from 'next/link'

export default function MainMenu(){
  return(
    <nav>
      <ul>
        <li>
          <Link href="/">Inicio</Link>
        </li>
        <li>
          <Link href="/about">Acerca de</Link>
        </li>
        <li>
          <Link href="/contact">Contactanos </Link>
        </li>
      </ul>
    </nav>
  )
}