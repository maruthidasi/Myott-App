import React, { useState } from 'react';
import './CreateAccount.scss'; 
import { useNavigate } from 'react-router-dom';


function CreateAccount() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');  // State for confirm password
  const navigate = useNavigate();

  const handleCreateAccount = (e) => {
    e.preventDefault();
    // Check if passwords match
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    // Handle account creation (store user details in localStorage)
    const userDetails = { email, password };
    localStorage.setItem('user', JSON.stringify(userDetails));

    alert('Account created successfully! You are now being redirected to the homepage.');

    // Navigate to the homepage after account creation
    navigate('/home');
  };

  return (
    <div className="create-account-page">
      <form onSubmit={handleCreateAccount}>
        <h1>MyOTT💻</h1>
        <h2>Create your account</h2>

        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Re-enter Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}

export default CreateAccount;
