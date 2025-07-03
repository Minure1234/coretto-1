import { useState } from "react";
import { ShoppingCart, Search, Menu, X, User } from "lucide-react"; 
import { NavLink } from "react-router-dom";
import "../assets/sass/header.scss"; 

const Header = ({ cartItems = [], setSearchQuery = () => {} }) => {
  const [menuOpen, setMenuOpen] = useState(false); 
  const [searchOpen, setSearchOpen] = useState(false); 
  const [inputValue, setInputValue] = useState("");
  const [activeDropdown, setActiveDropdown] = useState(null);

  
  const handleSearchSubmit = (e) => {
    e.preventDefault(); 
    setSearchQuery(inputValue); 
    setSearchOpen(false); 
  };

  
  const dropdownData = {
    Home: ["Homepage V1", "Homepage V2", "Homepage V3"],
    Pages: [
      "About Us",
      "About Me",
      "Our Team",
      "What We Offer",
      "Our Menu",
      "Locations",
      "Contact Us",
    ],
    Portfolio: ["Standard", "Gallery", "Masonry", "Portfolio Single"],
    Blog: ["Standard Blog", "Grid Blog", "Post Types"],
    Shop: ["Products", "Product Single", "Cart", "Checkout"],
    Elements: ["Accordions", "Buttons", "Tabs", "Typography"],
  };

  return (
    <nav className="navbar">
     
      {!searchOpen && (
        <>
          <div className="container-fluid">
           
            <div className="logo">
              <img
                src="https://corretto.qodeinteractive.com/wp-content/themes/corretto/assets/img/logo-light.png"
                alt="corretto logo"
              />
            </div>

          
            <div className="right-section">
              
              <div className="menu">
                {Object.keys(dropdownData).map((menuItem) => (
                  <div
                    className="nav-item-dropdown"
                    onMouseEnter={() => setActiveDropdown(menuItem)} 
                    onMouseLeave={() => setActiveDropdown(null)} 
                    key={menuItem}
                  >
                    <NavLink className="nav-link" to={`/${menuItem.toLowerCase()}`}>
                      {menuItem}
                    </NavLink>
                    
                    {activeDropdown === menuItem && (
                      <div className="dropdown-content">
                        {dropdownData[menuItem].map((subItem) => (
                          <NavLink
                            to={`/${menuItem.toLowerCase()}/${subItem
                              .toLowerCase()
                              .replace(/\s/g, "-")}`} 
                            key={subItem}
                          >
                            {subItem}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

               
                <div className="nav-item-dropdown">
                  <NavLink className="nav-link" to="/dashboard">
                    Dashboard
                  </NavLink>
                </div>
              </div>

              <div className="icons">
               
                <div className="user-icon">
                  <NavLink to="/login"> 
                    <User />
                  </NavLink>
                </div>

              
                <div className="relative cart-icon">
                  <ShoppingCart />
                  <span className="cart-count">{cartItems?.length || 0}</span> 
                </div>

                
                <div className="search-icon" onClick={() => setSearchOpen(true)}>
                  <Search />
                </div>

                {!menuOpen && (
                  <Menu
                    className="mobile-menu-icon"
                    onClick={() => setMenuOpen(true)}
                  />
                )}
              </div>
            </div>
          </div>

          {menuOpen && (
            <div className="mobile-menu open">
              <X className="close-btn" onClick={() => setMenuOpen(false)} />
              {Object.keys(dropdownData).map((menuItem) => (
                <NavLink
                  className="nav-link"
                  to={`/${menuItem.toLowerCase()}`}
                  key={menuItem}
                  onClick={() => setMenuOpen(false)} 
                >
                  {menuItem}
                </NavLink>
              ))}
              <NavLink
                className="nav-link"
                to="/dashboard"
                onClick={() => setMenuOpen(false)}
              >
                Dashboard
              </NavLink>
              <NavLink
                className="nav-link"
                to="/login"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </NavLink>
            </div>
          )}
        </>
      )}

      {searchOpen && (
        <div className="search-bar">
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search for products..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit">Search</button>
            <button
              type="button"
              className="back-btn"
              onClick={() => setSearchOpen(false)}
            >
              Back
            </button>
          </form>
        </div>
      )}
    </nav>
  );
};

export default Header;