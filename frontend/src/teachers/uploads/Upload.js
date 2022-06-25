import React from 'react'
import './upload.css'

function Upload() {
  return (
    <div className="upload-div">
        <div className='upload-ul'>
        <ul>
            <li className="notes_list"><a href=""><span>Upload File</span>
                <input type="file" name="file-upload-field" className="upload-btn " />
                </a>
                <button className="btn btn-primary btn-upload" id="up-btn">Upload</button>
            </li> 
        </ul>
        </div>
    </div>
  )
}

export default Upload