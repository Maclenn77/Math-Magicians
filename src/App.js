import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Calc from './pages/Calculator';
import Quote from './pages/Quote';
import Home from './pages/Home';
import Navbar from './components/Navbar';

class App extends React.Component { // eslint-disable-line

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route exact path="/calc" element={<Calc />} />
            <Route exact path="/" element={<Home />} />
            <Route exact path="/quote" element={<Quote />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
