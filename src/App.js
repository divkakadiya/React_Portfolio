import { Routes, Route } from 'react-router-dom';
import Navbar from './portfolio_component/navbar';
import Home from './portfolio_component/Home';
import About from './portfolio_component/About';
import Skill from './portfolio_component/Skill';
import Project from './portfolio_component/project';
import Contact from './portfolio_component/cotact';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/tec' element={<Skill />}></Route>
        <Route path='/pro' element={<Project />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
