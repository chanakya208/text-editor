import React from 'react'
import PropTypes from 'prop-types'
/* import {Link} from 'react-router-dom'; */
export default function Navbar(props) {
  const func1=()=>{
    if(props.mode==="dark")
    props.fun("light");
    else
    props.fun("dark");
  }
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
  <div className="container-fluid">
    {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
    <a className="navbar-brand" jref="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">{props.About}</a>
          {/* <Link className="nav-link" to="/about">{props.About}</Link> */}
        </li>
      </ul>
      <div className="form-check form-switch">
        <input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" onClick={func1}/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color:props.mode==='dark'?'white':'black'}}>Enable dark Mode</label>
      </div>
    </div>
  </div>
</nav>
  )
}
Navbar.propTypes={title:PropTypes.string,About:PropTypes.string}
Navbar.defaultProps={title:"Insert title"}