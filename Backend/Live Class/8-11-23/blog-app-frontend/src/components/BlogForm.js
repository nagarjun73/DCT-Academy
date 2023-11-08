import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startCreateBlog } from '../actions/blogActions'
import { useNavigate } from 'react-router-dom'

import { useFormik } from 'formik'
import * as Yup from 'yup'

function BlogForm() {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [error, setError] = useState({})
  const blogs = useSelector((state) => {
    return state.blogs
  })



  //FORMIK and YUP
  const blogValidationSchema = Yup.object().shape({
    title: Yup.string().required('title is required'),
    content: Yup.string().required('content is required').min(3)
  })

  const formik = useFormik({
    initialValues: {
      title: '',
      content: ""
    },
    validationSchema: blogValidationSchema,
    validateOnChange: false,
    onSubmit: (formData, { resetForm }) => {

      dispatch(startCreateBlog({ formData, resetForm, navigate }))
    }
  })


  const dispatch = useDispatch()

  useEffect(() => {
    if (blogs.editId) {
      const findBlog = blogs.data.find((ele) => ele._id == blogs.editId)
      if (findBlog) {
        setTitle(findBlog.title)
        setContent(findBlog.content)
      }
    }
  }, [blogs.editId])

  useEffect(() => {
    const errObj = blogs.serverErrors.reduce((acc, ele) => {
      acc[ele.path] = ele.msg
      return acc
    }, {})
    setError(errObj)
  }, [blogs.serverErrors])

  // const resetForm = () => {
  //   setTitle('')
  //   setContent('')
  // }

  // const formSubmitHandle = (e) => {
  //   e.preventDefault()
  //   if (!blogs.editId) {

  //     const formData = {
  //       title,
  //       content
  //     }
  //     dispatch(startCreateBlog(formData, navigate, resetForm))
  //   } else {

  //     const formData = {
  //       title,
  //       content
  //     }
  //     console.log(FormData)
  //     // dispatch(startCreateBlog(formData, navigate, resetForm))
  //   }
  // }

  return (
    <div>
      <h1>BlogForm</h1>
      <form onSubmit={formik.handleSubmit}>
        <label>Title</label> <br />
        <input type='text' value={formik.values.title} onChange={formik.handleChange} name='title' /><br />
        {error.title && <p style={{ color: 'red' }}>{error.title}</p>}
        {formik.errors.title ? formik.errors.title : ""}<br />
        <label>Content</label> <br />
        <input type='text' value={formik.values.content} onChange={formik.handleChange} name='content' /><br />
        {error.content && <p style={{ color: 'red' }}>{error.content}</p>}
        {formik.errors.content ? formik.errors.content : ""}<br />
        <input type='submit' value="create blog" />
      </form >
    </div >
  )
}

export default BlogForm