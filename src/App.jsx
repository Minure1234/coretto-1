// App.jsx
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";

// Layoutlar
import Header from "../src/layouts/Header";
import Footer from "../src/layouts/Footer";


// Əsas səhifələr
import HomePage from "../src/pages/HomePage/HomePage.jsx";
import HomePageTwo from "../src/pages/HomePage/HomePageTwo";
import HomePageThree from "../src/pages/HomePage/HomePageThree";
import HomePageFour from "../src/pages/HomePage/HomePageFour";
import HomePageFive from "../src/pages/HomePage/HomePageFive";
import HomePageSix from "../src/pages/HomePage/HomePageSix";
import HomePageSeven from "../src/pages/HomePage/HomePageSeven";
import HomePageEight from "../src/pages/HomePage/HomePageEight";
import HomePageNine from "../src/pages/HomePage/HomePageNine";


import AboutUs from "./pages/AboutPage/AboutUs";

// Dashboard komponentləri
import Sidebar from "../src/components/Sidebar";
import DashboardLayout from '../src/components/DashboardLayout.jsx';
import DashboardHome from '../src/pages/Dashboard/DashboardHome.jsx';
import BlogList from '../src/pages/Dashboard/Blog/BlogList.jsx';
import AddBlog from '../src/pages/Dashboard/Blog/AddBlog.jsx';
import EditBlog from '../src/pages/Dashboard/Blog/EditBlog.jsx';
import CategoryList from '../src/pages/Dashboard/Category/CategoryList.jsx';
import AddCategory from '../src/pages/Dashboard/Category/AddCategory.jsx';
import EditCategory from '../src/pages/Dashboard/Category/EditCategory.jsx';

const AppContent = () => {
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  const isDashboardPath = location.pathname.startsWith('/dashboard');

  const dummyCartItems = [
    { id: 1, name: 'Espresso', price: 3.50 },
    { id: 2, name: 'Latte', price: 4.00 }
  ];

  return (
    <>
      {!isDashboardPath && (
        <Header cartItems={dummyCartItems} setSearchQuery={setSearchQuery} />
      )}

      {isDashboardPath ? (
        <div className="dashboard-container">
          <Sidebar />
          <Routes>
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<DashboardHome />} />
              <Route path="blog" element={<Navigate to="list" replace />} />
              <Route path="blog/list" element={<BlogList />} />
              <Route path="blog/add" element={<AddBlog />} />
              <Route path="blog/edit/:id" element={<EditBlog />} />
              <Route path="categories" element={<Navigate to="list" replace />} />
              <Route path="categories/list" element={<CategoryList />} />
              <Route path="categories/add" element={<AddCategory />} />
              <Route path="categories/edit/:id" element={<EditCategory />} />
              <Route path="*" element={
                <div style={{ padding: '20px', textAlign: 'center' }}>
                  <h3>Dashboard Səhifəsi Tapılmadı</h3>
                </div>
              } />
            </Route>
          </Routes>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={
            <>
              <HomePage />
              <HomePageTwo />
              <HomePageThree />
              <HomePageFour />
              <HomePageFive />
              <HomePageSix />
              <HomePageSeven />
              <HomePageEight />
              <HomePageNine />
            </>
          } />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="*" element={
            <div style={{ padding: '20px', textAlign: 'center', marginTop: '80px' }}>
              <h2>Səhifə Tapılmadı</h2>
              <p>Axtardığınız səhifə mövcud deyil.</p>
            </div>
          } />
        </Routes>
      )}

      {!isDashboardPath && <Footer />}
    </>
  );
};

// Wrapper component to provide Router context
const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
