import  { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  // Dummy data for demonstration. In a real app, you'd fetch this.
  useEffect(() => {
    const dummyBlogs = [
      { id: '1', title: 'The Art of Coffee Brewing', author: 'John Doe', date: '2023-01-15' },
      { id: '2', title: 'Exploring Different Coffee Beans', author: 'Jane Smith', date: '2023-02-20' },
      { id: '3', title: 'Sustainable Coffee Practices', author: 'Coffee Lover', date: '2023-03-10' },
    ];
    setBlogs(dummyBlogs);
  }, []);

  const handleDelete = (id) => {
    if (window.confirm(`Are you sure you want to delete blog post with ID: ${id}?`)) {
      setBlogs(blogs.filter(blog => blog.id !== id));
      alert('Blog post deleted!');
    }
  };

  return (
    <div>
      <h2>All Blog Posts</h2>
      <button className="add-new-btn" onClick={() => navigate('/dashboard/blog/add')}>Add New Blog</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.length === 0 ? (
            <tr>
              <td colSpan="5">No blog posts found.</td>
            </tr>
          ) : (
            blogs.map(blog => (
              <tr key={blog.id}>
                <td>{blog.id}</td>
                <td>{blog.title}</td>
                <td>{blog.author}</td>
                <td>{blog.date}</td>
                <td className="actions">
                  <Link to={`/dashboard/blog/edit/${blog.id}`}>
                    <button className="edit-btn">Edit</button>
                  </Link>
                  <button className="delete-btn" onClick={() => handleDelete(blog.id)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BlogList;