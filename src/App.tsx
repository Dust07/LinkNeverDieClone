import './main.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from "react-redux"
import LandingPage from './containers/landing-page/LandingPage';
import Layout from './containers/Layout/Layout';
import LoginPage from './containers/login-register-page/login-page/LoginPage';
import RegisterPage from './containers/login-register-page/register-page/RegisterPage';
import ErrorPage from './containers/error-page/ErrorPage';
import Loader from './components/Loader/Loader';

function App() {
  const isLoading = useSelector((state: any) => state.users.isLoading)
  return (
    <>
      {isLoading && <Loader />}
      <div className="App">
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Layout>
        </Router>
      </div>
    </>

  );
}

export default App;
