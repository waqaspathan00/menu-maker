import './App.css';
import {loginWithGoogle} from './firebase/index'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import MenuPage from './menuPage'

function App() {
  return (
    <div className="App">
        <button onClick={loginWithGoogle}>Login w/ Google</button>
        <Router>
          <Routes>
              {/* <Route exact path='/' component={Home} /> */}
              <Route path='/view' element={<MenuPage/>} /> 
          </Routes>
        </Router>
    </div>
  );
}

export default App;
