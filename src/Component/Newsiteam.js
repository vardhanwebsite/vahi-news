import React, { Component } from 'react'
export default class Newsiteam extends Component {
    
  render() {
    let {title,description,imageUrl,newsUrl,author,date}=this.props
    return (
      <div>
        <div className="card  bg-dark text-light" style={{height:"29rem",width: "18rem"}}  >
  <img src={imageUrl} style={{height: "12rem", }} className="card-img-top" alt=""/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">By {!author?"unknown":author} on{new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-primary btn-sm">Read More</a>
  </div>
</div>
      </div>
    )
  }
}
