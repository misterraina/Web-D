import SinglePost from "../../Components/singlePost/SinglePost"
import Sidebar from "../../Components/sidebar/Sidebar"
import "./single.css"

import React from 'react'

export default function Single() {
  return (
    <div className="single">
      <SinglePost/>
      <Sidebar/>
    </div>
  )
}
