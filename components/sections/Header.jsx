import MainMenu from '../navigation/MainMenu'

export default function Header(){
  return(
    <header>
      <div className="logo">
        <img src="https://ed.team/static/images/logo/logo.svg" alt="EDlogo"/>
      </div>
      <MainMenu />
    </header>
  )
}