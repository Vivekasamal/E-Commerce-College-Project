import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Login from './Common/Login';
import Home from './Screens/Home';
import Cart from './Screens/Cart';
import Wishlist from './Screens/Wishlist';
import Error from './Error';
import Logout from './Common/Logout';
import Profile from './Common/Profile';
import SignUp from './Common/SignUp';
import Order from './Screens/Order';
import Search from './Common/Search';
import Season from './Screens/Season';
import Shirt from './Screens/Shirt';
import Tshirt from './Screens/Tshirt';
import Hoodie from './Screens/Hoodie';
import Jean from './Screens/Jean';
import Newdrops from './Screens/Newdrops';
import Mosttrending from './Screens/Mosttrending';
import Mens from './Screens/Mens';
import Kids from './Screens/Kids';
import Womens from './Screens/Womens';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Components */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/Cart" element={<Layout><Cart /></Layout>} />
        <Route path="/Wishlist" element={<Layout><Wishlist /></Layout>} />
        <Route path="/Order" element={<Layout><Order /></Layout>} />
        <Route path="/Search" element={<Layout><Search /></Layout>} />

        {/* Common components */}
        <Route path="*" element={<Error />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Season" element={<Season />} />
        <Route path="/Shirt" element={<Shirt />} />
        <Route path="/Tshirt" element={<Tshirt />} />
        <Route path="/Hoodie" element={<Hoodie />} />
        <Route path="/Jean"  element={<Jean/>} />
        <Route path='/Newdrops' element={<Newdrops />}  />
        <Route path='/Mosttrending' element={<Mosttrending />}  />
        <Route path='/Mens' element={<Mens />}  />
        <Route path='/Womens' element={<Womens/>}  />
        <Route path='/Kids' element={<Kids />}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
