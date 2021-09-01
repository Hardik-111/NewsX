import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    render() {
        return (
            <div className="container my-3">
                <h2 my-5><u>NewsX - Top Headlines</u></h2>
                <div className="row">
                    <div className="col-md-3">
                     <NewsItem title="Cricket" description="Desc"/>
                     </div>
                     <div className="col-md-3">
                     <NewsItem title="Cricket" description="Desc"/>
                     </div> <div className="col-md-3">
                     <NewsItem title="Cricket" description="Desc"/>
                     </div>
                     <div className="col-md-3">
                     <NewsItem title="Cricket" description="Desc"/>
                     </div>
                 </div>
               
            </div>
        )
    }
}

export default News
