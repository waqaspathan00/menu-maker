import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MenuPage from './menuPage'
import Navbar from './components/Navbar/Navbar';
import PrimaryLayout from './Layout/PrimaryLayout';
import AddMenu from './pages/AddMenu';
import AddItems from './pages/AddItems';
function App()
{
  return (
    <div className="App w-screen h-screen">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/view' element={<MenuPage />} />
          <Route path="/add-menu" element={<PrimaryLayout children={<AddMenu />} />} />
          <Route path="/add-items" element={<PrimaryLayout children={<AddItems />} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
