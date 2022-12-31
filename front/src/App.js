// components
import Header from './components/header.js';
// pages
import Landing from './pages/Landing.js';
import Form from './pages/Form.js';
import Tictactoe from './pages/Tictactoe.js';

// imports
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/form" element={<Form />} />
        <Route path="/tictactoe" element={<Tictactoe />} />
      </Routes>
    </Router>
  )
}

export default App;
