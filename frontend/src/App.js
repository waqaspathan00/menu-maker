import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MenuPage from './menuPage'
import Navbar from './components/Navbar/Navbar';
import PrimaryLayout from './Layout/PrimaryLayout';
import AddMenu from './pages/AddMenu';
function App()
{
  return (
    <div className="App w-screen h-screen">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/view' element={<MenuPage />} />
          <Route path="/dashboard" element={<PrimaryLayout children={<AddMenu />} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
