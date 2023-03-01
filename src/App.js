import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import HomePage from 'scenes/home-page';
import LoginPage from 'scenes/login-page';
import ProfilePage from 'scenes/profile-page';

function App() {
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/profile/:userId' element={<ProfilePage />} />
    </Routes>
  </BrowserRouter>
}

export default App;
// Back