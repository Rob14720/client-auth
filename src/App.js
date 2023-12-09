import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';

import Login from './linkComponents/Login';

function App() {
  return (
    <Router>
      <div className="App">
      <ul>
        <li>
        <h2>Client Auth Project</h2>
        </li>
        <li>
          <Link to="/login">Login.</Link>
        </li>
      </ul>
      <Routes>
        <PrivateRoute exact path= '/protected' component={friendsList} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Login} />
      </Routes>
    </div>
    </Router>

  );
}

export default App;
