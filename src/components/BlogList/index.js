// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogsList = props => {
  const {blogsList} = props
  return (
    <div className="blog-list-container">
      <ul className="blog-list">
        {blogsList.map(eachItem => (
          <BlogItem details={eachItem} key={eachItem.id} />
        ))}
      </ul>
    </div>
  )
}

export default BlogsList
