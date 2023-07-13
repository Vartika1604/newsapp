import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title, description, ImageUrl, newsUrl}= this.props;
    return (
      <div>
        <div className="card">
      <img src={!ImageUrl?"https://smartevarer.no/wp-content/uploads/2017/04/Spinner.jpg":ImageUrl} className="card-img-top" alt="..."/> 
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description} </p>
      <a href={newsUrl}  target="_blank" rel="noreferrer" className="btn btn-primary btn-dark btn-sm">Read more</a>
      </div>
</div>

      
    )
  }
}
