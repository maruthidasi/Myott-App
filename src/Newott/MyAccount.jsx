import React, { useState } from 'react';
import './MyAccount.scss';


const MyAccount = () => {
  const [user, setUser] = useState({
    name: 'Maruthi Dasi',
    email: 'Maruthidasi@gmail.com',
    avatar: '/My Avatar.jpg', 
    plan: 'Premium HD',
    renewal: 'May 15, 2025',
    status: 'Active',
    devices: ['iPhone 13', 'Samsung Smart TV', 'Windows PC'],
    history: ['Blindspotting', 'Daylights End', 'In the blood'],
  });

  const [showModal, setShowModal] = useState(false);
  const [editName, setEditName] = useState(user.name);
  const [editEmail, setEditEmail] = useState(user.email);
  const [editAvatar, setEditAvatar] = useState(user.avatar);

  
  const removeDevice = (index) => {
    if (window.confirm('Are you sure you want to Remove Device?')) {
      const updatedDevices = user.devices.filter((_, i) => i !== index);
      setUser({ ...user, devices: updatedDevices });
    }
  };

  const clearHistory = () => {
    if (window.confirm('Are you sure you want to clear all watch history?')) {
      setUser({ ...user, history: [] });
    }
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setEditAvatar(imageURL);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    setUser((prev) => ({
      ...prev,
      name: editName,
      email: editEmail,
      avatar: editAvatar,
    }));
    setShowModal(false);
  };

  return (
    <div className="account-page">
      <h1>My Account</h1>
      
      <section className="account-section profile">
        <img src={user.avatar} alt="Avatar" className="avatar" />
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <button className="account-btn" onClick={() => setShowModal(true)}>Edit Profile</button>
        </div>
      </section>

      {/* Subscription Info */}
      <section className="account-section">
        <h2>Subscription</h2>
        <p><strong>Plan:</strong> {user.plan}</p>
        <p><strong>Status:</strong> {user.status}</p>
        <p><strong>Renewal Date:</strong> {user.renewal}</p>
        <button className="account-btn">Manage Subscription</button>
      </section>

      {/* Connected Devices */}
      <section className="account-section">
        <h2>Connected Devices</h2>
        <ul>
          {user.devices.map((device, i) => (
            <li key={i}>
              {device}{' '}
              <button className="small-btn" onClick={() => removeDevice(i)}>❌</button>
            </li>
          ))}
        </ul>
      </section>

      {/* Watch History */}
      <section className="account-section">
        <h2>Watch History</h2>
        {user.history.length > 0 ? (
          <>
            <ul>
              {user.history.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <button className="account-btn" onClick={clearHistory}>Clear History</button>
          </>
        ) : (
          <p>No history available.</p>
        )}
      </section>

      {/* Edit Profile Modal */}
      {showModal && (
        <div className="modal-backdrop">
          <div className="modal">
            <h2>Edit Profile</h2>
            <form onSubmit={handleSave}>
              <input
                type="text"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                placeholder="Full Name"
                required
              />
              <input
                type="email"
                value={editEmail}
                onChange={(e) => setEditEmail(e.target.value)}
                placeholder="Email"
                required
              />

              {/* Avatar Upload */}
              <div className="avatar-preview">
                <img src={editAvatar} alt="Preview" className="avatar" />
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
              />

              <div className="modal-buttons">
                <button type="submit" className="account-btn">Save</button>
                <button type="button" className="account-btn" onClick={() => setShowModal(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyAccount;
