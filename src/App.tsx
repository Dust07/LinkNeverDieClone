import './main.scss';
import LandingPage from './containers/landing-page/LandingPage';
import Layout from './containers/Layout/Layout';
import LoginPage from './containers/login-register-page/login-page/LoginPage';
import RegisterPage from './containers/login-register-page/register-page/RegisterPage';

function App() {
  return (
    <div className="App">
      <Layout>
        <LandingPage />
        {/* <LoginPage />
        <RegisterPage /> */}
      </Layout>
    </div>
  );
}

export default App;
