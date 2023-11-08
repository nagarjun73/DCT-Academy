import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function BlogShow() {
  const { id } = useParams()

  const blog = useSelector((state) => {
    return state.blogs.data.find(ele => ele._id === id)
  })

  return (
    <div>
      <h1>Blog Show</h1>
      <h2>{blog?.title}</h2>
      <h2>{blog?.content}</h2>
    </div>
  )
}

export default BlogShow