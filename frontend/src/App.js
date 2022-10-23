import Home from './components/LandingPage/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Authentication from './pages/Authentication';
import Blogs from './components/Blogs/Blogs';
import User from './pages/User/User';
import Assesment from './pages/User/Assessment/Assesment';
// import ShowRoadmap from './pages/ShowRoadmap';
import { BlogForm } from './components/Blogs/BlogForm'
import React from 'react';
import { RoadmapForm } from './components/Roadmaps/RoadmapForm';
import { Checkout } from './components/Checkout/Checkout';
import Community from './pages/Community';
import SignUp from './components/auth/SignUp';
import Login from './components/auth/Login';
import ProDashboard from './pages/User/ProDashboard';
import ShowRoadmap from './components/Roadmaps/RoadmapTemplate';


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/proweguide" element={<ProDashboard />} />
        {/* <Route path="/proweguide" element={<ProDashboard />} /> */}
        
        {/* <Route path="/register" element={<SignUp />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/proweguide/addBlog" element={<BlogForm />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/user" element={<User />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/user/assessment" element={<Assesment />} />
        <Route path="/user/roadmap" element={<ShowRoadmap />} />
        <Route path="/blogs/addblog" element={<BlogForm />} />
        <Route path="/admin/addRoadmap" element={<RoadmapForm />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/proweguide/community" element={<Community />} />
        <Route path="/myRoadmap" element={<ShowRoadmap />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
