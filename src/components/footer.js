import React from 'react';

export const Footer = () => {
    return (
        <>
            <div className='adresses'>
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
            <div className='info'>
                our contacts:
                <div>
                    <p className='phone-number'>+375290000000</p>
                    <p className='phone-number'>+375291111111</p>
                </div>

                <p className='email'>artemada2@gmail.com</p>
            </div>
            <div className='background'></div>
            <div className='footer-black'></div>
        </>
    )
}