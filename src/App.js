import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import Contact from './Contact';


function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" Component={Home}></Route>
            <Route path="aboutus/" Component={AboutUs}></Route>
            <Route path="contact/" Component={Contact}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
