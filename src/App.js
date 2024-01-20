import './App.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import PopularSection from './components/popular';

function App() {
  const state = useSelector((state) => state.manageSlice)
  const [menu, setMenu] = useState(false);
  return ( <>
    <header>
      <h1>ADA's Pizza</h1>
      <div className = 'manage'>
        <div className = 'user-info'>
          <h3 className='user-name'>{state.userName}</h3>
          <h4 className='balance'>{state.balance.toFixed(2)}$</h4>
        </div>
        <img className='avatar' src={state.avatarLink} onClick={() => {setMenu(!menu); console.log(menu)}}></img>
        <ul className='user-menu' style={{ display: (menu)?"block":"none"}}>
          <li>balance</li>
          <li>orders</li>
          <li>profile</li>
        </ul>
      </div>
    </header>
    <main>
      <sectoin className = 'popular'>
        <PopularSection/>
      </sectoin>

      <sectoin className= 'orders'>

      </sectoin>
    </main>
    <footer>
    <div className = 'adresses'>
        <h2>ADA's Pizza</h2>
        <p>the best pizzeria in Gomel!</p>
        <ul>adresses:
          <li>
            ул. Богдана Хмельницкого 80А, Гомель, Гомельская область 246036
          </li>
          <li>
            Речицкий просп. 5В, Гомель, Гомельская область 246027
          </li>
          <li>
            ул. Советская 2, Гомель, Гомельская область 246050
          </li>
        </ul>
    </div>
      <div className = 'info'>
        our contacts:
        <div>
          <p className = 'phone-number'>+375290000000</p>
          <p className = 'phone-number'>+375291111111</p>        
        </div>

        <p className = 'email'>artemada2@gmail.com</p>
      </div>
      <div className='background'></div>
    </footer>
  </>)
}

export default App;
