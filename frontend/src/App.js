import './App.css';
import { loginWithGoogle } from './firebase/index'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import MenuPage from './menuPage'
import Navbar from './components/Navbar/Navbar';
import PrimaryLayout from './Layout/PrimaryLayout';
import Dashboard from './pages/Dashboard';

function App()
{
  return (
    <div className="App">
      {/* <button onClick={loginWithGoogle}>Login w/ Google</button> */}

      <Router>
        <Navbar />
        <Routes>
          {/* <Route exact path='/' component={Home} /> */}
          <Route path='/view' element={<MenuPage />} />
          <Route path="/dashboard" element={<PrimaryLayout children={<Dashboard />} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
