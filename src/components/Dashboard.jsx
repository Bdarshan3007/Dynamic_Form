import React from 'react'
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  const loggedUser = JSON.parse(localStorage.getItem('loggedUser')) || [];

  const handleLogout = () => {
    localStorage.removeItem('loggedUser');
    console.log("Logout successful");
    navigate("/login");
  }
  return (
    <div className="dashboard-layout">
      <header className="dashboard-nav">
        <div className="nav-brand">
          <div className="brand-logo">DK</div>
          <span>Darshan's Auth</span>
        </div>
        <div className="nav-user-actions">
          <div className="user-badge">
            <div className="user-avatar-sm">
              {loggedUser.name ? loggedUser.name.charAt(0).toUpperCase() : 'U'}
            </div>
            <span>{loggedUser.email || 'User'}</span>
          </div>
          <button onClick={handleLogout} className="btn-logout">
            Log out
          </button>
        </div>
      </header>

      <main className="dashboard-main">
        <div className="dashboard-card">
          <div className="dashboard-card-header">
            <h1 className="dashboard-card-title">Welcome back, {loggedUser.name || 'User'}</h1>
            <p className="dashboard-card-subtitle">Here are your user account details</p>
          </div>

          <div className="info-row">
            <span className="info-row-label">Full Name</span>
            <span className="info-row-value">{loggedUser.name || 'N/A'}</span>
          </div>

          <div className="info-row">
            <span className="info-row-label">Email Address</span>
            <span className="info-row-value">{loggedUser.email || 'N/A'}</span>
          </div>

          <div className="info-row">
            <span className="info-row-label">Account Status</span>
            <span className="info-row-value" style={{ color: '#16a34a' }}>Active</span>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard


