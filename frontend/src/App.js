import './App.css';
import {loginWithGoogle} from './firebase/index'

function App() {
  return (
    <div className="App">
        <button onClick={loginWithGoogle}>Login w/ Google</button>
    </div>
  );
}

export default App;
