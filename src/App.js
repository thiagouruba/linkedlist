import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/layout/nav-bar/NavBar';
import Home from './components/pages/home/Home';
import HowWorks from './components/pages/how-works/HowWorks';
import Questions from './components/pages/questions/Questions';
import Price from './components/pages/price/Price';
import Login from './components/pages/login/Login';
import Container from './components/layout/container/Container';
import Footer from './components/layout/footer/Footer';
import Register from './components/pages/register/Register';
import Dashboard from './components/pages/dashboard/Dashboard';
import RegisterLink from './components/pages/registrer-link/RegisterLink';
import EditLink from './components/pages/edit-link/EditLink';

export default function App() {
  return (
    <Router>
      <NavBar />
      <Container>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/how-works" element={<HowWorks />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/price" element={<Price />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register-link" element={<RegisterLink />} />
          <Route path="/edit-link/:id" element={<EditLink />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}
