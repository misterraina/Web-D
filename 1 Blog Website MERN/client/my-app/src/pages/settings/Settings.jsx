import Sidebar from "../../Components/sidebar/Sidebar"
import "./settings.css"

export default function Settings() {
  return (
    <div className="setting">
        <div className="settingWrapper">
        <div className="settingTitle">
            <span className="settingUpdateTitle">Update Your Account</span>
            <span className="settingDeleteTitle">Delete Account</span>
        </div>
        <form className="settingForm">
            <label>Profile Picture</label>
            <div className="settingPp">
                <img src="https://images.unsplash.com/photo-1592972490115-dbfee7e1710d?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile image" />
                <label htmlFor="fileInput">
                <i className="settingPpIcon fa-regular fa-user"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} />
            </div>
            <label>Username</label>
            <input className="settingInput" type="text" placeholder="Ayush" />
            <label>Email</label>
            <input className="settingInput" type="email" placeholder="ayush@gmail.co" />
            <label>Password</label>
            <input className="settingInput" type="password" />
            <button className="settingSubmit">Update</button>
        </form>
        </div>
        <Sidebar/>
    </div>
  )
}
