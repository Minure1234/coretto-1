import  { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditCategory = () => {
  const { id } = useParams(); // Get category ID from URL
  const navigate = useNavigate();
  const [categoryData, setCategoryData] = useState({
    name: '',
    description: '',
  });

  // Dummy data fetch for demonstration. In a real app, fetch from API using `id`.
  useEffect(() => {
    // Simulate fetching category data based on ID
    const fetchCategory = () => {
      // This would be an API call, e.g., axios.get(`/api/categories/${id}`)
      const dummyCategories = [
        { id: 'cat1', name: 'Coffee Brewing', description: 'Tips and tricks for brewing perfect coffee.' },
        { id: 'cat2', name: 'Bean Varieties', description: 'Discover different types of coffee beans from around the world.' },
        { id: 'cat3', name: 'Recipes', description: 'Coffee-based recipes and drinks.' },
      ];
      const categoryToEdit = dummyCategories.find(cat => cat.id === id);
      if (categoryToEdit) {
        setCategoryData(categoryToEdit);
      } else {
        alert('Category not found!');
        navigate('/dashboard/categories/list');
      }
    };
    fetchCategory();
  }, [id, navigate]); // Re-run effect if ID changes

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategoryData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you'd send this updated data to your backend API
    console.log(`Updating category ID ${id}:`, categoryData);
    alert(`Category ID ${id} updated successfully! (Data logged to console)`);
    navigate('/dashboard/categories/list'); // Redirect to category list
  };

  return (
    <div>
      <h2>Edit Category: {categoryData.name} (ID: {id})</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Category Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={categoryData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={categoryData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Update Category</button>
      </form>
    </div>
  );
};

export default EditCategory;