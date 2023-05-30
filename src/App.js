import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/layout/nav-bar/NavBar';
import Home from './components/pages/home/Home';
import Container from './components/layout/container/Container';
import Footer from './components/layout/footer/Footer';
import Dashboard from './components/pages/dashboard/Dashboard';
import RegisterLink from './components/pages/registrer-link/RegisterLink';
import EditLink from './components/pages/edit-link/EditLink';
import { ToastContainer } from 'react-toastify';

export default function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Container>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/register-link" element={<RegisterLink />} />
            <Route path="/edit-link/:id" element={<EditLink />} />
          </Routes>
          <ToastContainer position="top-center" theme="colored"/>
        </Container>
        <Footer />
      </Router>
    </div>
  );
}
