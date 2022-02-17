import './App.css';
import { Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Todos from './pages/Todos';
import Users from './pages/Users';
import history from './history'
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <Router history={history}>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;
