import './App.css'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Line from './components/Line/Line';
import Bar from './components/Bar/Bar';
import Pie from './components/Pie/Pie';

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/'  element={<Home />} />
          <Route path='/bar' element={<Bar />}/>
          <Route path='/line' element={<Line />}/>
          <Route path='/pie' element={<Pie />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
