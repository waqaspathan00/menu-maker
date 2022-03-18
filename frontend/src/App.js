import './App.css';
import {loginWithGoogle} from './firebase/index'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import MenuPage from './menuPage'
import Home from './homePage'

function App() {
  return (
    <div className="App" class="max-h-full">
        {/* <button onClick={loginWithGoogle}>Login w/ Google</button> */}
        <Router>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/view' element={<MenuPage/>} /> 
          </Routes>
        </Router>
    </div>
  );
}

export default App;
