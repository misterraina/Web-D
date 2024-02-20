import './write.css'

export default function Write() {
  return (
    <div className='write'>

        <img className='writeImg' src="https://images.unsplash.com/photo-1552083375-1447ce886485?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="write image" />

        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id='fileInput' style={{display:"none"}} />
                <input type="text" placeholder='Title' className='writeInput' autoFocus={true} />
            </div>
            <div className="writeFormGroup">
                <textarea placeholder="Tell your story . . ." type="text" className="writeInput writeText"></textarea>
            </div>
            <button className='writeSubmit'>Publish</button>
        </form>
    </div>
  )
}
