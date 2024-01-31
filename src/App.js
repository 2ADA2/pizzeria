import './App.css';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import PopularSection from './components/popular';
import CreateOrders from './components/orders';

function App() {
  const state = useSelector((state) => state.manageSlice)
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    const background = document.getElementById('body-background');
    background.style.height = document.body.getBoundingClientRect().height + 'px';
  }, []);


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

    <div id = 'body-background'></div>

    <main>
      <h2 className = 'article'>popular now:</h2>
      <sectoin className = 'popular'>
        <PopularSection/>
      </sectoin>

      <h2 className='article orders-article'>our other dishes:</h2>
      <sectoin className = 'orders'>
        <CreateOrders></CreateOrders>
      </sectoin>

      <section className= 'shipping-payment'>
        <h2>Shipping and payment</h2>
        <div className = 'container'>
          <div>
            <h3>60 MINUTES OR PIZZA FREE</h3>
            <p>If we fail to deliver any products, except souvenirs and sauces, within 60 minutes, the courier will give you a certificate for a large pizza.</p>
          </div>
          <div>
            <h3>From 15.99$</h3>
            <p>Minimum delivery amount. Orders for a smaller amount are placed on a pickup basis.</p>
            <h3>500$</h3>
            <p>Maximum amount when paying in cash
              Product images may differ from the products in your order.</p>
          </div>          
        </div>


      </section>
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
      <div className = 'footer-black'></div>
    </footer>
  </>)
}

export default App;
