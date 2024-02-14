import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Componentes/Header';


function App() {
  return (
    <div className="App overflow-hidden">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
