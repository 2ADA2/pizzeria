import React from 'react';
import PopularSection from './popular';
import CreateOrders from './orders';

export const Main = () => {
    return (<>
        <h2 className='article'>popular now:</h2>
        <sectoin className='popular'>
            <PopularSection />
        </sectoin>

        <h2 className='article orders-article'>our other dishes:</h2>
        <sectoin className='orders'>
            <CreateOrders></CreateOrders>
        </sectoin>

        <section className='shipping-payment'>
            <h2>Shipping and payment</h2>
            <div className='container'>
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
    </>)
}
