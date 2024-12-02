import React from 'react';
import './sidebar.css';
import '@fortawesome/fontawesome-free/css/all.css';

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar-container">
            <div className="sidebar-header">
                <h2>Lend Lib</h2>
            </div>
            <div className="sidebar-menu-container">
                <ul className="sidebar-menu">
                    <li className="sidebar-item">
                        <a className="sidebar-item-link" href="/staff"><i className="fas fa-home"></i> Dashboard</a>
                    </li>
                    <li className="sidebar-item">
                        <a className="sidebar-item-link" href="/books"><i className="fas fa-book"></i> Books</a>
                    </li>
                    <li className="sidebar-item">
                        <a className="sidebar-item-link" href="/borrowed"><i className="fas fa-book-bookmark"></i> Borrowed</a>
                    </li>
                    <li className="sidebar-item">
                        <a className="sidebar-item-link" href="/returned"><i className="fas fa-calendar"></i> Returned</a>
                    </li>
                    <li className="sidebar-item">
                        <a className="sidebar-item-link" href="/profile"><i className="fas fa-user"></i> Profile</a>
                    </li>
                    <li className="sidebar-item">
                        <a className="sidebar-item-link" href="/logout"><i className="fas fa-sign-out"></i> Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
