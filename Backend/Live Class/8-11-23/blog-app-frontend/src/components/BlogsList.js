import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { startGetBlogs } from '../actions/blogActions'
import { editBlog } from '../actions/blogActions'
import { useNavigate } from 'react-router-dom'
import { startDeleteBlog, startStatusCheck } from '../actions/blogActions'

function BlogsList() {
  const [select, setSelect] = useState('')
  const navigate = useNavigate()
  const blogLists = useSelector((state) => {
    return state.blogs.data
  })
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(startGetBlogs())
  }, [])

  useEffect(() => {
    if (select) {
      dispatch(startStatusCheck(select))
    }
  }, [select])

  const handleClickFuncton = (id) => {
    dispatch(editBlog(id))
    navigate('/blogs/new')
  }

  const hanldeRemoveBlog = (id) => {
    dispatch(startDeleteBlog(id))
  }

  return (
    <div>
      <p ><Link to="/blogs/new">Create Blog</Link></p>

      <select onChange={(e) => setSelect(e.target.value)}>
        <option value='select'>Select</option>
        {['pending', 'approved', 'reject'].map((ele, i) => {
          return <option key={i} value={ele}>{ele}</option>
        })}
      </select>

      <h1>Listing blogs - {blogLists.length}</h1>
      {blogLists.length > 0 ? <ul>
        {blogLists.map((ele) => {
          return <li key={ele._id}><Link to={`/blogs/${ele._id}`}>{ele.title} -- {ele.content} </Link><button onClick={() => handleClickFuncton(ele._id)}>Edit</button><button onClick={() => hanldeRemoveBlog(ele._id)}>Remove</button></li>
        })}
      </ul> : <p>no blogs found. Add your first blog</p>}
    </div>
  )
}

export default BlogsList