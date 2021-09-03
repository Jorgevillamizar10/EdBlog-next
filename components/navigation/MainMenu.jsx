import { createRef } from 'react'
import Link from 'next/link'

const menu = createRef()
const toggleMenu = () => {
  menu.current.classList.toggle("show") // cuando le damos click quitamos la clase show y la ponemos
}

export default function MainMenu(){
  return(
    <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links">
      <nav className="show main-menu" ref={menu}>
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
      <div className="main-menu-toggle to-l" onClick={() => toggleMenu()}>
      </div>
    </div>
  )
}