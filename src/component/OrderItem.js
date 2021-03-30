import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import './OrderItem.css';
import moment from 'moment'
import CurrencyFormat from 'react-currency-format';

function OrderItem({order}) {
    return (
        <div className="order">
            <h2>Orders</h2>
            <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>
            <p className="order__id">
                <small>{order.id}</small>

            </p>
            {order.data.basket?.map(item=>(
                <CheckoutProduct
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    hideButton="true"
                />
            ))}
            <CurrencyFormat
                renderText={(value)=>(
                    <h3 className="order__total">Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount/100}
        
                displayType={"text"}
                thousandSeparator={true}
                prefix={"Rs "}
            />
        </div>
    )
}

export default OrderItem
