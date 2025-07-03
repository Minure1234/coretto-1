import  { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  // Dummy data for demonstration. In a real app, you'd fetch this.
  useEffect(() => {
    const dummyCategories = [
      { id: 'cat1', name: 'Coffee Brewing', description: 'Tips and tricks for brewing perfect coffee.' },
      { id: 'cat2', name: 'Bean Varieties', description: 'Discover different types of coffee beans from around the world.' },
      { id: 'cat3', name: 'Recipes', description: 'Coffee-based recipes and drinks.' },
    ];
    setCategories(dummyCategories);
  }, []);

  const handleDelete = (id) => {
    if (window.confirm(`Are you sure you want to delete category with ID: ${id}?`)) {
      setCategories(categories.filter(cat => cat.id !== id));
      alert('Category deleted!');
    }
  };

  return (
    <div>
      <h2>All Categories</h2>
      <button className="add-new-btn" onClick={() => navigate('/dashboard/categories/add')}>Add New Category</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.length === 0 ? (
            <tr>
              <td colSpan="4">No categories found.</td>
            </tr>
          ) : (
            categories.map(category => (
              <tr key={category.id}>
                <td>{category.id}</td>
                <td>{category.name}</td>
                <td>{category.description}</td>
                <td className="actions">
                  <Link to={`/dashboard/categories/edit/${category.id}`}>
                    <button className="edit-btn">Edit</button>
                  </Link>
                  <button className="delete-btn" onClick={() => handleDelete(category.id)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryList;