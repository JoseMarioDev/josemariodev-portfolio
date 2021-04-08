import { BrowserRouter as Router } from 'react-router-dom';
import './scss/main.scss';
import Header from './components/header/Header';

function App() {
  return (
    <Router>
      <div>
        <Header />
      </div>
    </Router>
  );
}

export default App;
