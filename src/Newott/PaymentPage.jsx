// import React from 'react';
// import './PaymentPage.scss';
// import { useNavigate } from 'react-router-dom';

// const PaymentPage = () => {
//   const navigate = useNavigate();
//   const user = JSON.parse(localStorage.getItem('user')) || {};
  
//   const handlePayment = () => {
//     // Simulating payment success
//     alert('Payment Successful!');
    
//     // After successful payment, update the user's plan
//     const updatedUser = { ...user, paymentStatus: 'paid' };

//     // Save updated user details in localStorage
//     localStorage.setItem('user', JSON.stringify(updatedUser));
    
//     // Redirect to the Home page
//     navigate('/home');
//   };

//   return (
//     <div className="payment-page">
//       <h1>Payment Page</h1>
//       <p>You're subscribing to the <strong>{user.plan}</strong> plan.</p>
//       <button onClick={handlePayment}>Pay Now</button>
//     </div>
//   );
// };

// export default PaymentPage;

import React, { useState } from 'react';
import './PaymentPage.scss';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PaymentPage = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user')) || {};
  const [paymentMethod, setPaymentMethod] = useState('razorpay');

  const handlePayment = () => {
    // Simulate a payment success message
    toast.success(`Payment successful using ${paymentMethod.toUpperCase()}!`, {
      position: 'top-center',
      autoClose: 3000,
    });

    // Simulate a small delay before redirect
    setTimeout(() => {
      const updatedUser = { ...user, paymentStatus: 'paid', paymentMethod };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      navigate('/home');
    }, 2500);
  };

  return (
    <div className="payment-page">
      <ToastContainer />
      <h1>Payment Page</h1>
      <p>You're subscribing to the <strong>{user.plan || 'Standard'}</strong> plan.</p>

      <label htmlFor="payment-method">Select Payment Method:</label>
      <select
        id="payment-method"
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
      >
        <option value="razorpay">Razorpay</option>
        <option value="paytm">Paytm</option>
        <option value="cashfree">Cashfree</option>
      </select>

      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default PaymentPage;
