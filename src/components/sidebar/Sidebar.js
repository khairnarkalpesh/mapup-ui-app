import React, { useState, useEffect } from "react";
import "./styles.css";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Update body class when isDarkMode changes
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const handleSidebarToggle = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  const handleSearchClick = () => {
    setIsSidebarOpen(false);
  };

  const handleModeToggle = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  return (
    <nav className={`sidebar ${isSidebarOpen ? "close" : ""}`}>
      <header>
        <div className="image-text">
          {/* <span className="image"><img src="logo.png" alt="" />test</span>
          <span>MapUp Ui App</span> */}

          <div className="text logo-text">
            <span className="name">MapUp UI App</span>
            {/* <span className="profession">Web developer</span> */}
          </div>
          <i
            className="bx bx-chevron-right toggle"
            onClick={handleSidebarToggle}
          ></i>
        </div>
      </header>

      <div className="menu-bar">
        <div className="menu">
          {/* <li className="search-box">
            <i className="bx bx-search icon"></i>
            <input
              type="text"
              placeholder="Search..."
              onClick={handleSearchClick}
            />
          </li> */}

          <ul className="menu-links">
            <li className="nav-link">
              <a href="#">
                <i className="bx bx-home-alt icon"></i>
                <span className="text nav-text">Dashboard</span>
              </a>
            </li>

            <li className="nav-link">
              <a href="#">
                <i className="bx bx-bar-chart-alt-2 icon"></i>
                <span className="text nav-text">Revenue</span>
              </a>
            </li>

            <li className="nav-link">
              <a href="#">
                <i className="bx bx-bell icon"></i>
                <span className="text nav-text">Notifications</span>
              </a>
            </li>

            <li className="nav-link">
              <a href="#">
                <i className="bx bx-pie-chart-alt icon"></i>
                <span className="text nav-text">Analytics</span>
              </a>
            </li>

            <li className="nav-link">
              <a href="#">
                <i className="bx bx-heart icon"></i>
                <span className="text nav-text">Likes</span>
              </a>
            </li>

            <li className="nav-link">
              <a href="#">
                <i className="bx bx-wallet icon"></i>
                <span className="text nav-text">Wallets</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="bottom-content">
          <li className="">
            <a href="#">
              <i className="bx bx-log-out icon"></i>
              <span className="text nav-text">Logout</span>
            </a>
          </li>

          <li className="mode" onClick={handleModeToggle}>
            <div className="sun-moon">
              <i className="bx bx-moon icon moon"></i>
              <i className="bx bx-sun icon sun"></i>
            </div>
            <span className="mode-text text">
              {isDarkMode ? "Light mode" : "Dark mode"}
            </span>

            <div className="toggle-switch">
              <span className={`switch ${isDarkMode ? "dark" : ""}`}></span>
            </div>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
