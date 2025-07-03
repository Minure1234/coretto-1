import  { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditBlog = () => {
  const { id } = useParams(); // Get blog ID from URL
  const navigate = useNavigate();
  const [blogData, setBlogData] = useState({
    title: '',
    author: '',
    content: '',
    imageUrl: '',
    category: '',
  });

  // Dummy data fetch for demonstration. In a real app, fetch from API using `id`.
  useEffect(() => {
    // Simulate fetching blog data based on ID
    const fetchBlog = () => {
      // This would be an API call, e.g., axios.get(`/api/blogs/${id}`)
      const dummyBlogs = [
        { id: '1', title: 'The Art of Coffee Brewing', author: 'John Doe', date: '2023-01-15', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', imageUrl: 'https://via.placeholder.com/400x200?text=Coffee+Brewing', category: 'Brewing' },
        { id: '2', title: 'Exploring Different Coffee Beans', author: 'Jane Smith', date: '2023-02-20', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', imageUrl: 'https://via.placeholder.com/400x200?text=Coffee+Beans', category: 'Beans' },
        { id: '3', title: 'Sustainable Coffee Practices', author: 'Coffee Lover', date: '2023-03-10', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.', imageUrl: 'https://via.placeholder.com/400x200?text=Sustainable+Coffee', category: 'Sustainability' },
      ];
      const blogToEdit = dummyBlogs.find(blog => blog.id === id);
      if (blogToEdit) {
        setBlogData(blogToEdit);
      } else {
        alert('Blog not found!');
        navigate('/dashboard/blog/list');
      }
    };
    fetchBlog();
  }, [id, navigate]); // Re-run effect if ID changes

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you'd send this updated data to your backend API
    console.log(`Updating blog ID ${id}:`, blogData);
    alert(`Blog post ID ${id} updated successfully! (Data logged to console)`);
    navigate('/dashboard/blog/list'); // Redirect to blog list after submission
  };

  return (
    <div>
      <h2>Edit Blog Post: {blogData.title} (ID: {id})</h2>
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
        <button type="submit">Update Blog</button>
      </form>
    </div>
  );
};

export default EditBlog;