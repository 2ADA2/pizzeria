import './App.css';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import {Main} from './components/main';
import {Footer} from './components/footer';
import {Balance} from './components/balance';
import {OrdersPage} from './components/ordersPage';

function App() {
  const state = useSelector((state) => state.manageSlice)
  const [menu, setMenu] = useState(false);

  return ( <Router>
    <header>
      <h1><Link to='/'>ADA's Pizza</Link></h1>
      <div className = 'manage'>
        <div className = 'user-info'>
          <h3 className = 'user-name'>{state.userName}</h3>
          <h4 className = 'balance'>{state.balance.toFixed(2)}$</h4>
        </div>
        <img className='avatar' src={state.avatarLink} onClick={() => {setMenu(!menu)}}></img>
        <ul className='user-menu' style={{ display: (menu)?"block":"none"}}>
          <li><Link to = '/balance'>balance</Link></li>
          <li><Link to = '/orders'>orders</Link></li>
          <li><Link to = '/profile'>profile</Link></li>
        </ul>
      </div>
    </header>

    <div id = 'body-background'></div>

    <main>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/balance" element={<Balance/>} />
        <Route path="/orders" element={<OrdersPage/>} />
        <Route path="/profile" element={<h1>profile</h1>} />
      </Routes>
    </main>

    <footer>
      <Footer/>
    </footer>
    
  </Router>)
}

export default App;
