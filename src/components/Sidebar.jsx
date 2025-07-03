
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Coffee Admin</h2>
      <ul>
        <li>
          <NavLink to="/dashboard" end>Dashboard Home</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/blog">Blog Management</NavLink>
          <ul>
            <li><NavLink to="/dashboard/blog/list">All Blogs</NavLink></li>
            <li><NavLink to="/dashboard/blog/add">Add New Blog</NavLink></li>
          </ul>
        </li>
        <li>
          <NavLink to="/dashboard/categories">Category Management</NavLink>
          <ul>
            <li><NavLink to="/dashboard/categories/list">All Categories</NavLink></li>
            <li><NavLink to="/dashboard/categories/add">Add New Category</NavLink></li>
          </ul>
        </li>
        {/* Add more dashboard links here */}
      </ul>
    </div>
  );
};

export default Sidebar;