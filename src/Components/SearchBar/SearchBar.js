import React from 'react'
import './SearchBar.css'

function SearchBar(props) {
  return (
    <div className="row mt-5">
      <div className="col"></div>
      <div className="col-10 col-md-8 col-xl-6"><div className="input-group"><input type="text" className="form-control" placeholder="Enter your city here..." onChange={props.inFn} onKeyDown={(e) => {
        if (e.key === "Enter") props.serFn()
      }} /><button className="btn btn-primary" type="button" onClick={props.serFn}>Search</button></div></div>
      <div className="col"></div>

    </div>
  )
}

export default SearchBar
