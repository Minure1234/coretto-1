
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddBlog = () => {
  const navigate = useNavigate();
  const [blogData, setBlogData] = useState({
    title: '',
    author: '',
    content: '',
    imageUrl: '',
    category: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you'd send this data to your backend API
    console.log('Adding new blog:', blogData);
    alert('Blog post added successfully! (Data logged to console)');
    navigate('/dashboard/blog/list'); // Redirect to blog list after submission
  };

  return (
    <div>
      <h2>Add New Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={blogData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={blogData.author}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            name="content"
            value={blogData.content}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="imageUrl">Image URL (Optional):</label>
          <input
            type="url"
            id="imageUrl"
            name="imageUrl"
            value={blogData.imageUrl}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={blogData.category}
            onChange={handleChange}
            placeholder="e.g., Coffee Culture, Recipes"
          />
        </div>
        <button type="submit">Add Blog</button>
      </form>
    </div>
  );
};

export default AddBlog;