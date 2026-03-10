import "../../style/NavBar/NavBar.css"

const NavBar = () => {
  return (
    <div className="nav">
        <dev className="nav-logo">MotorPluse</dev>
        <ul className="nav-manu">
            <li>Home</li>
            <li>Explore</li>
            <li>About</li>
            <li className="nav-contact">Contact</li>
        </ul>
    </div>
  )
}

export default NavBar
