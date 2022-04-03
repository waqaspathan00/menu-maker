import './App.css';
import {loginWithGoogle} from './firebase/index'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import MenuPage from './menuPage'
import Home from './homePage'
import { SomeMenu } from './some-menu';

function App() {
  return (
    <div className="max-h-full">
        {/* <button onClick={loginWithGoogle}>Login w/ Google</button> */}
        <Router>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/view' element={<MenuPage/>} /> 
              <Route path='/view/some-menu' element={<SomeMenu/>} /> 
          </Routes>
        </Router>
    </div>
  );
}

export default App;
