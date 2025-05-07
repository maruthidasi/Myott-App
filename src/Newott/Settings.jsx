import React, { useState } from 'react';
import './Settings.scss'; 


const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotif, setEmailNotif] = useState(true);

  const handleThemeToggle = () => setDarkMode(!darkMode);
  const handleNotifToggle = () => setEmailNotif(!emailNotif);
  const [user, setUser] = useState({ name: 'Maruthi Dasi', email: 'Maruthidasi@gmail.com' });
const [editName, setEditName] = useState(user.name);
const [editEmail, setEditEmail] = useState(user.email);
const [showEditProfile, setShowEditProfile] = useState(false);

const handleProfileUpdate = (e) => {
  e.preventDefault();
  setUser({ name: editName, email: editEmail });
  setShowEditProfile(false);
};


  return (
    <div className={`settings-page ${darkMode ? 'dark' : ''}`}>
      <h1>Settings</h1>
     <section className="settings-section">
  <h2>Profile</h2>
  {!showEditProfile ? (
    <>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <button className="settings-btn" onClick={() => setShowEditProfile(true)}>Edit Profile</button>
    </>
  ) : (
    <form onSubmit={handleProfileUpdate}>
      <input
        type="text"
        value={editName}
        onChange={(e) => setEditName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="email"
        value={editEmail}
        onChange={(e) => setEditEmail(e.target.value)}
        placeholder="Email"
      />
      <button type="submit" className="settings-btn">Save</button>
      <button type="button" className="settings-btn" onClick={() => setShowEditProfile(false)}>Cancel</button>
    </form>
  )}
     </section>
      <section className="settings-section">
        <h2>Change Password</h2>
        <form>
          <input type="password" placeholder="Current Password" />
          <input type="password" placeholder="New Password" />
          <input type="password" placeholder="Confirm New Password" />
          <button type="submit" className="settings-btn">Update Password</button>
        </form>
      </section>
      <section className="settings-section">
        <h2>Notifications</h2>
        <label>
          <input
            type="checkbox"
            checked={emailNotif}
            onChange={handleNotifToggle}
          />
          Receive email updates
        </label>
      </section>
      <section className="settings-section">
        <h2>Appearance</h2>
        <button className="settings-btn" onClick={handleThemeToggle}>
          Switch to {darkMode ? 'Light' : 'Dark'} Mode
        </button>
      </section>
      <section className="settings-section">
        <h2>Subscription</h2>
        <p>Plan: Premium</p>
        <p>Renewal Date: May 15, 2025</p>
        <button className="settings-btn">Manage Subscription</button>
      </section>
    </div>
  );
};

export default Settings;
