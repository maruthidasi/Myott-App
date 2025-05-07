// import React, { useState } from 'react';
// import './Signup.scss';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// function SignUp() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

  
//   const handleSubmit = (e) => {
//     e.preventDefault();
  
//     if (!email || !password) {
//       toast.error('Please fill in both fields', {
//         position: toast.POSITION.TOP_CENTER,
//         autoClose: 3000,
//       });
//       return;
//     }
  
//     // Proceed with the signup process
//     localStorage.setItem('user', JSON.stringify({ email, password }));
//     toast.success('Signup successful! Redirecting...', {
//       position: toast.POSITION.TOP_CENTER,
//       autoClose: 3000,
//     });
//     setTimeout(() => navigate('/home'), 2500); // Delay navigation to allow toast to appear
//   };
  

//   return (
//     <div className="signup-page">
//       <form onSubmit={handleSubmit}>
//         <h1>MyOTT💻</h1>
//         <h2>Unlimited movies, TV shows, and more.</h2>
//         <p>Watch anywhere. Cancel anytime.</p>
//         <p>Ready to watch? Enter your email to create or restart your membership.</p>

//         <input
//           type="email"
//           placeholder="Email address"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Signup</button>

//         <div className="signup-footer">
//           <p>
//             Don't have an account?{' '}
//             <span onClick={() => navigate('/LoginPage')} className="create-account-link">
//               Create one now
//             </span>
//           </p>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default SignUp;

// import React, { useState } from 'react';
// import './Signup.scss';
// import { useNavigate } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function SignUp() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       toast.error('Please fill in both fields', {
//         position:'top-right',
//         autoClose: 4000,
//       });
//       return;
//     }

//     localStorage.setItem('user', JSON.stringify({ email, password }));
//     toast.success('Signup successful! Redirecting...', {
//       position: 'top-center',
//       autoClose: 3000,
//     });
//     setTimeout(() => navigate('/home'), 2500); // Delay navigation to allow toast to appear
//   };

//   return (
//     <div className="signup-page">
//       <form onSubmit={handleSubmit}>
//         <h1>MyOTT💻</h1>
//         <h2>Unlimited movies, TV shows, and more.</h2>
//         <p>Watch anywhere. Cancel anytime.</p>
//         <p>Ready to watch? Enter your email to create or restart your membership.</p>

//         <input
//           type="email"
//           placeholder="Email address"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Signup</button>

//         <div className="signup-footer">
//           <p>
//             Don't have an account?{' '}
//             <span onClick={() => navigate('/LoginPage')} className="create-account-link">
//               Create one now
//             </span>
//           </p>
//         </div>
//       </form>
//       <ToastContainer />
//     </div>
//   );
// }

// export default SignUp;
import React, { useState } from 'react';
import './Signup.scss';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('Please fill in both fields', {
        position: 'top-right',
        autoClose: 4000,
      });
      return;
    }

    localStorage.setItem('user', JSON.stringify({ email, password }));
    toast.success('Signup successful! Redirecting...', {
      position: 'top-center',
      autoClose: 3000,
    });
    setTimeout(() => navigate('/home'), 2500); // Delay navigation to allow toast to appear
  };

  return (
    <div className="signup-page">
      <form onSubmit={handleSubmit}>
        <h1>MyOTT💻</h1>
        <h2>Unlimited movies, TV shows, and more.</h2>
        <p>Watch anywhere. Cancel anytime.</p>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>

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
        <button type="submit">Signup</button>

        <div className="signup-footer">
          <p>
            Don't have an account?{' '}
            <span onClick={() => navigate('/LoginPage')} className="create-account-link">
              Create one now
            </span>
          </p>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default SignUp;

