import './App.scss';
import Homepage from './Newott/Homepage';
import { Routes,Route, } from 'react-router-dom';
import VideoPlayer from './Newott/VideoPlayer';
import MyAccount from './Newott/MyAccount';
import Settings from './Newott/Settings';
import MoviesPage from './Newott/MoviesPage';
import SeriesPage from './Newott/SeriesPage';
import Signup from './Newott/Signup';
import LoginPage from './Newott/CreateAccount';
import SubscriptionPage from './Newott/SubscriptionPage';
import PaymentPage from './Newott/PaymentPage';
import CategoriesPage from './Newott/CategoriesPage';
import Contact from './Newott/Contact';
import { ToastContainer} from 'react-toastify';


function App() {
  return (
    <div className="App">
      <Routes>
     <Route path='/home'element={<Homepage/>}/>
     <Route path='/video'element={<VideoPlayer/>}/>
     <Route path="/account" element={<MyAccount />} />
     <Route path="/settings" element={<Settings />} />
     <Route path="/series" element={<SeriesPage />} />
     <Route path="/movies" element={<MoviesPage />} />
     <Route path="/signup" element={<Signup />} />
     <Route path="/" element={<Signup />} /> 
     <Route path="/loginpage" element={<LoginPage />} />
     <Route path="/subscribe" element={<SubscriptionPage />} />
     <Route path="/payment" element={<PaymentPage />} />
     <Route path="/categories" element={<CategoriesPage />} /> 
     <Route path="/contact" element={<Contact />} /> 
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
