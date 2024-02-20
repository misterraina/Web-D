import './topbar.css'

export default function Topbar() {
  return (
    <div className='top'>

      <div className="topLeft">
      <i class="topIcons fa-brands fa-facebook-f"></i>
      <i class="topIcons fa-brands fa-x-twitter"></i>
      <i class="topIcons fa-brands fa-instagram"></i>
      <i class="topIcons fa-brands fa-pinterest-p"></i>
      </div>

      <div className="topCenter">
        <ul className="topList">
          <li className="topListItems">HOME</li>
          <li className="topListItems">ABOUT</li>
          <li className="topListItems">CONTACT</li>
          <li className="topListItems">WRITE</li>
          <li className="topListItems">LOGOUT</li>
        </ul>
      </div>

      <div className="topRight">
        <img className="topImg" src="https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile pic" />
        
        <i class="topSearchIcon fa-solid fa-magnifying-glass"></i>

      </div>
    </div>
  )
}
