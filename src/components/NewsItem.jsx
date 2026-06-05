import React, { Component } from 'react'

export class NewsItem extends Component {
    

  render() {
    let {title, description, imageUrl, newsUrl, author, publishedAt, source} = this.props;
    return (
      <div className='my-3'>
        <div className="card position-relative" >
            {/* <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}}> */}
                <span className='position-absolute top-0 end-0 badge rounded-pill bg-danger' style={{ zIndex: 1}}>
                        {source?.name || "Unknown"}
                        {/* <span className="visually-hidden">unread messages</span> */}
                </span>
            {/* </div> */}
          <img src={imageUrl} className="card-img-top" alt={title} />
          <div className="card-body">
            <h5 className="card-title">{title}
                
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {this.props.author || "Unknown"} on {new Date(this.props.publishedAt).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem