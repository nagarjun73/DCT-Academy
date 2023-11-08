import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home';
import BlogsList from './components/BlogsList';
import BlogForm from './components/BlogForm';
import BlogShow from './components/BlogShow';
import { useEffect } from 'react';
import { startGetBlogs } from './actions/blogActions';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(startGetBlogs())
  }, [])

  return (
    <div className="App">
      <h1>Blog App</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/blogs">Blog List</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<BlogsList />} />
        <Route path="/blogs/new" element={<BlogForm />} />
        <Route path="/blogs/:id" element={<BlogShow />} />
      </Routes>
    </div>
  );
}

export default App;