import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title,description}= this.props;
        return (
    <div>
     <div className="card" style={{width: "18rem"}}>  
    <img src="https://c.ndtvimg.com/2021-09/beaci2fo_prasidh-krishna-twitter_625x300_01_September_21.jpg" className="card-img-top" alt="image"/>
         <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
         <a href="/" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</div>
           
        )
    }
}

export default NewsItem
