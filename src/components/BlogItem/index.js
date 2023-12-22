// Write your JS code here

import './index.css'

const BlogItem = props => {
  const {details} = props
  const {id, title, description, publishedDate} = details

  return (
    <div className="container">
      <div className="title-container">
        <h1 className="title-heading">{title}</h1>
        <p className="publishedDate">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
      <hr />
    </div>
  )
}

export default BlogItem
