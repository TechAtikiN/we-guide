import Home from './components/LandingPage/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Authentication from './pages/Authentication';
import Blogs from './components/Blogs/Blogs';
import User from './pages/User/User';
import Assessment from './pages/User/Assessment/Assessment'
import ShowRoadmap from './pages/ShowRoadmap';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/user" element={<User />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/user/assessment" element={<Assessment />} />
        <Route path="/user/roadmap" element={<ShowRoadmap />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
