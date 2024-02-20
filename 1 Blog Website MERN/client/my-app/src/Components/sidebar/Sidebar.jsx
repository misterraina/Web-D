import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">

      <div className="sidebarItem">

        <span className="sidebarTitle">ABOUT ME</span>
        <img src="https://plus.unsplash.com/premium_photo-1707372367558-7421b2982ade?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="sidebar Image" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis facere possimus ratione reiciendis! Lorem ipsum dolor sit.</p>

        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarLists">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        <i class="sidebarIcons fa-brands fa-facebook-f"></i>
        <i class="sidebarIcons fa-brands fa-x-twitter"></i>
        <i class="sidebarIcons fa-brands fa-instagram"></i>
        <i class="sidebarIcons fa-brands fa-pinterest-p"></i>
        </div>
      </div>
    </div>
  )
}
