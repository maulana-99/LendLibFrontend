import React from "react";
import "./sidebar.css";
import "@fortawesome/fontawesome-free/css/all.css";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <h2>Lend Lib</h2>
      </div>
      <div className="sidebar-menu-container">
        <ul className="sidebar-menu">
          <li className="sidebar-item">
            <a className="sidebar-item-link" href="/staff">
              <i className="fas fa-home"></i>
              <p className="sidebar-item-link-text">Dashboard</p>
            </a>
          </li>
          <li className="sidebar-item">
            <a className="sidebar-item-link" href="/books">
              <i className="fas fa-book"></i>
              <p className="sidebar-item-link-text">Books</p>
            </a>
          </li>
          <li className="sidebar-item">
            <a className="sidebar-item-link" href="/borrowed">
              <i className="fas fa-book-bookmark"></i>
              <p className="sidebar-item-link-text">Borrowed</p>
            </a>
          </li>
          <li className="sidebar-item">
            <a className="sidebar-item-link" href="/returned">
              <i className="fas fa-calendar"></i>
              <p className="sidebar-item-link-text">Returned</p>
            </a>
          </li>
          <li className="sidebar-item">
            <a className="sidebar-item-link" href="/profile">
              <i className="fas fa-user"></i>
              <p className="sidebar-item-link-text">Profile</p>
            </a>
          </li>
          <li className="sidebar-item">
            <a className="sidebar-item-link" href="/logout">
              <i className="fas fa-sign-out"></i>
              <p className="sidebar-item-link-text">Logout</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
