import Link from 'next/link'
import MainMenu from '../navigation/MainMenu'

export default function Header(){
  return(
    <header className="main-header">
      <div className="ed-grid s-grid-5 lg-grid-4">
        <div className="s-cols-4 lg-cols-1 s-cross-center">
          <Link href="/">
            <img src="/logoEdTeam.svg" alt="EDlogo" className="main-logo"/>
          </Link>
        </div>
        <MainMenu />
      </div>
    </header>
  )
}