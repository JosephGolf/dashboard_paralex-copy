// import '../App.css';
// import { useState } from "react";
// import { IoMdNotificationsOutline } from "react-icons/io";
// import { FaUserCircle, FaSearch, FaBars } from "react-icons/fa";

// const Header = ({ toggleSidebar }) => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//     console.log("Search:", e.target.value);
//   };

//   return (
//     <header className="header-container">
//       {/* Hamburger toggle (mobile only) */}
//       <button className="menu-toggle" onClick={toggleSidebar}>
//         <FaBars />
//       </button>

//       <div className="header-left">
//         <div className="header-search">
//           <FaSearch className="search-icon" />
//           <input
//             type="text"
//             placeholder="Search ..."
//             value={searchTerm}
//             onChange={handleSearch}
//             className="search-input"
//           />
//         </div>
//       </div>

//       <div className="header-controls">
//         <div className="header-icon header-notification">
//           <IoMdNotificationsOutline />
//         </div>
//         <div className="header-icon header-profile">
//           <FaUserCircle />
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
// import '../App.css';
// import { useState } from 'react';
// import { IoMdNotificationsOutline } from 'react-icons/io';
// import {
//   FaUserCircle,
//   FaSearch,
//   FaBars,
//   FaSignOutAlt,
//   FaCog,
// } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import { logoutAdmin } from '../api/authHelper';

// const Header = ({ toggleSidebar }) => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [showDropdown, setShowDropdown] = useState(false);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//   };

//   return (
//     <header className="header-container">
//       <button className="menu-toggle" onClick={toggleSidebar}>
//         <FaBars />
//       </button>

//       <div className="header-left">
//         <div className="header-search">
//           <FaSearch className="search-icon" />
//           <input
//             type="text"
//             placeholder="Search ..."
//             value={searchTerm}
//             onChange={handleSearch}
//             className="search-input"
//           />
//         </div>
//       </div>

//       <div className="header-controls">
//         <div className="header-icon header-notification">
//           <Link to="notifications">
//             <IoMdNotificationsOutline />
//           </Link>
//         </div>

//         <div className="header-icon header-profile" onClick={toggleDropdown}>
//           <FaUserCircle />
//           {showDropdown && (
//             <div className="profile-dropdown">
//               <div className="profile-caret" />
//               <div
//                 className={`profile-card ${showDropdown ? 'profile-show' : ''}`}
//               >
//                 <div className="profile-header">
//                   <div className="profile-avatar">
//                     <FaUserCircle className="profile-avatar-icon" />
//                     <span className="profile-status-dot" />
//                   </div>
//                   <div className="profile-info">
//                     <div className="profile-name">Zainab S.</div>
//                     <div className="profile-email">
//                       zainab.sidiku@paralexlogistics.com
//                     </div>
//                   </div>
//                 </div>
//                 <hr className="profile-divider" />
//                 <Link to="settings">
//                   <div className="profile-item">
//                     <FaCog className="profile-item-icon" />
//                     <span>Account Setting</span>
//                   </div>
//                 </Link>
//                 <Link to="/" onClick={() => logoutAdmin()}>
//                   <div className="profile-item">
//                     <FaSignOutAlt className="profile-item-icon" />
//                     <span>Log out</span>
//                   </div>
//                 </Link>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
import React, { useState } from 'react';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { FaUserCircle, FaSearch, FaBars, FaSignOutAlt, FaCog } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import { logoutAdmin } from '../api/authHelper';

export default function Header({ toggleSidebar }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => setSearchTerm(e.target.value);
  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const handleLogoutClick = (e) => {
    e.preventDefault();
    setShowLogoutConfirm(true);
  };

  const handleConfirmLogout = () => {
    logoutAdmin();
    setShowDropdown(false);
    setShowLogoutConfirm(false);
    navigate('/');
  };

  const handleCancelLogout = () => {
    setShowLogoutConfirm(false);
  };

  return (
    <>
      <header className="header-container">
        <button className="menu-toggle" onClick={toggleSidebar}>
          <FaBars />
        </button>

        <div className="header-left">
          <div className="header-search">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search ..."
              value={searchTerm}
              onChange={handleSearch}
              className="search-input"
            />
          </div>
        </div>

        <div className="header-controls">
          <div className="header-icon header-notification">
            <Link to="/admin/notifications">
              <IoMdNotificationsOutline />
            </Link>
          </div>

          <div className="header-icon header-profile" onClick={toggleDropdown}>
            <FaUserCircle />
            {showDropdown && (
              <div className="profile-dropdown">
                <div className="profile-caret" />
                <div className="profile-card profile-show">
                  <div className="profile-header">
                    <div className="profile-avatar">
                      <FaUserCircle className="profile-avatar-icon" />
                      <span className="profile-status-dot" />
                    </div>
                    <div className="profile-info">
                      <div className="profile-name">Admin</div>
                      <div className="profile-email">info@paralexlogistics.com </div>
                    </div>
                  </div>
                  <hr className="profile-divider" />
                  <Link to="/admin/settings">
                    <div className="profile-item">
                      <FaCog className="profile-item-icon" />
                      <span>Account Setting</span>
                    </div>
                  </Link>
                  <a href="/" className="profile-item" onClick={handleLogoutClick}>
                    <FaSignOutAlt className="profile-item-icon" />
                    <span>Log out</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {showLogoutConfirm && (
        <div className="logout-modal-overlay" role="dialog" aria-modal="true">
          <div className="logout-modal">
            <h3 className="logout-modal-title">Confirm Logout</h3>
            <p className="logout-modal-message">Are you sure you want to log out?</p>
            <div className="logout-modal-actions">
              <button type="button" className="btn-cancel" onClick={handleCancelLogout}>
                Cancel
              </button>
              <button type="button" className="btn-confirm" onClick={handleConfirmLogout}>
                Log Out
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}