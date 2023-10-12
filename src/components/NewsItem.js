import React from 'react'

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className='container my-4'>
      <div className={`card text-bg-${props.mode==='dark'?'secondary':'light'} bg- border border-${props.mode==='dark'?'light':'dark'}-subtle`}>
        <div style={{
          display: "flex",
          justifyContent: "flex-end",
          right: "0",
          position: "absolute"
        }}>
          <span className="badge rounded-pill bg-danger" style={{ left: "90%", zIndex: "1" }}>{source}</span>
        </div>

        <img src={imageUrl} className="card-img-top" alt="..." style={{height: '30vh'}} />
        <div className="card-body" style={{height: '60%'}}>
          <strong><h5 className="card-title" style={{height: '48px', overflow: 'hidden'}}>{title}</h5></strong>
          <p className="card-text" style={{height: '72px', overflow: 'hidden', marginTop: '2px'}}>{description}</p>
          <p className="card-text"><small>By {author ? author : "Unknown"}</small></p>
          <p className="card-text"><small>On {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} target='_blank' rel='noreferrer' className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem
