// import React, { useState } from 'react';
// import './SubscriptionPage.scss';
// import { useNavigate } from 'react-router-dom';


// const SubscriptionPage = () => {
//   const [selectedPlan, setSelectedPlan] = useState('');
//   const navigate = useNavigate();

// const handleSubscribe = () => {
//     if (!selectedPlan) {
//       alert('Please select a plan');
//       return;
//     }
  
//     // Save the subscription plan (simulate)
//     const user = JSON.parse(localStorage.getItem('user')) || {};
//     user.plan = selectedPlan;
//     localStorage.setItem('user', JSON.stringify(user));
  
//     alert(`You’ve selected the ${selectedPlan} plan! Redirecting to payment...`);
//     navigate('/payment'); // 👈 go to payment page
//   };
  

//   return (
//     <div className="subscription-page">
//       <h1>Choose Your Plan</h1>
//       <div className="plans">
//         {['Basic', 'Standard HD', 'Premium HD'].map((plan) => (
//           <div
//             key={plan}
//             className={`plan-card ${selectedPlan === plan ? 'selected' : ''}`}
//             onClick={() => setSelectedPlan(plan)}
//           >
//             <h2>{plan}</h2>
//             <p>{plan === 'Basic' ? '480p' : plan === 'Standard HD' ? '720p' : '1080p + 4K'}</p>
//             <p>
//               ₹
//               {plan === 'Basic' ? '199' : plan === 'Standard HD' ? '399' : '599'}
//               /month
//             </p>
//           </div>
//         ))}
//       </div>
//       <button className="subscribe-btn" onClick={handleSubscribe}>Subscribe</button>
//     </div>
//   );
// };

// export default SubscriptionPage;

import React, { useState } from 'react';
import './SubscriptionPage.scss';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SubscriptionPage = () => {
  const [selectedPlan, setSelectedPlan] = useState('');
  const navigate = useNavigate();

  const handleSubscribe = () => {
    if (!selectedPlan) {
      toast.error('Please select a plan before subscribing.');
      return;
    }

    // Save the subscription plan (simulate)
    const user = JSON.parse(localStorage.getItem('user')) || {};
    user.plan = selectedPlan;
    localStorage.setItem('user', JSON.stringify(user));
    toast.success(`You’ve selected the ${selectedPlan} plan! Redirecting to payment...`);
    navigate('/payment'); // 👈 go to payment page
  
  };

  return (
    <div className="subscription-page">
      <h1>Choose Your Plan</h1>
      <div className="plans">
        {['Basic', 'Standard HD', 'Premium HD'].map((plan) => (
          <div
            key={plan}
            className={`plan-card ${selectedPlan === plan ? 'selected' : ''}`}
            onClick={() => setSelectedPlan(plan)}
          >
            <h2>{plan}</h2>
            <p>{plan === 'Basic' ? '480p' : plan === 'Standard HD' ? '720p' : '1080p + 4K'}</p>
            <p>
              ₹
              {plan === 'Basic' ? '199' : plan === 'Standard HD' ? '399' : '599'}
              /month
            </p>
          </div>
        ))}
      </div>
      <button className="subscribe-btn" onClick={handleSubscribe}>Subscribe</button>
      <ToastContainer />
    </div>
  );
};

export default SubscriptionPage;
