import React from "react";

const NewsItem =(props)=> {

    let { title, description, imageUrl, newsUrl, author, date, source, darkMode } =
     props;
    return (
        <div className={`my-3 ${darkMode ? "text-light" : "text-dark"}`}>

      <div className="my-3">
        <div className="card" style={{ border: "1px solid darkgrey" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
            >
            <span
              className=" badge rounded-pill bg-danger"
              style={{ border: "1px solid black" }}
              >
              {source}
            </span>
          </div>
          <img
            src={
              !imageUrl
              ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg"
              : imageUrl
            }
            className="card-img-top"
            alt="img"
            />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <small className="text-muted">
              By <b>{!author ? "Unkwown" : author}</b> on
              <b>{new Date(date).toGMTString()}</b>
            </small>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
    );
  
}

export default NewsItem;
