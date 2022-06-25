import React from 'react'

function View_row(props) {
  return (
    <div classNameName="card" style="width: 18rem;">
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{props.subject}</h6>
            <p className="card-text">{props.sname}</p>
            <p className="card-text">schoolname</p>
            <p className="card-text">schoolname</p>
        </div>
    </div>
  )
}

export default View_row