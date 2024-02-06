import "./single.css"
import Sidebar from "../../Components/sidebar/Sidebar"
import SinglePost from "../../Components/singlePost/SinglePost"

export default function single() {
  return (
    <div className="single">
        <SinglePost/>
        <Sidebar/>
      
    </div>
  )
}
