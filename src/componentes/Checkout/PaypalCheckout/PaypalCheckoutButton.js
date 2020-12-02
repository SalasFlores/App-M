import React from 'react';
import ReactDOM from 'react-dom';
import paypal from 'paypal-checkout';
 
const PaypalCheckoutButton = ({order}) => {
    const paypalConf = {
        currency: 'MXN',
        env: 'sandbox',
        client: {
           sandbox:'Afi98LsKvi5sHJgQFfBvZlOXXb52BJvkK8ZLZcS3VKjSA8ZWVtNbULrE623w-rPev7rxmmDfDOcOT8sq',
          //sandbox:'AYsbW9rk6ZgHTn5wZEGNCtocy_OAfDreHPcrJIUMDDfD_Ov4P-6D7UEE53_K4hEDdF9TewAbPMCRmDZv',
            production:'--id--',
        },
        style:{
            label: 'pay',
            size: 'medium',
            shape: 'rect',
            color: 'gold'
        }
    };
    
    const PaypalButton = paypal.Button.driver('react', {React, ReactDOM});
    const payment = (data, actions) => {
        const payment = {
            transactions: [
                {
                amount: {
                    total: order.total,
                    currency: paypalConf.currency,
                },
                description: 'compra en app',
                custom: order.customer || '',
                item_list: {
                    items: order.items
                }
            }
        ],
            note_to_payer: 'contactanos por si te han estafado',
        };

        console.log(payment);
        return actions.payment.create({payment});
    };
    const onAuthorize = (data, actions) => {
        return actions.payment.execute()
        .then(response => {
            console.log(response);
            alert(`El pago fue realizado correctamente, ID:${response.id}`);
        })
        .catch(error => {
            console.log(error);
            alert('ocurrió un error');
        });
    };
    const onError = (error) => {
        console.log(error);
        alert('El pago no fue realizado, intentelo de nuevo');
    };
    const onCancel = (data, actions) => {
        alert('Seguro de cancelar su pedido');
    };
    return  (
        <PaypalButton 
        env={paypalConf.env}
        client={paypalConf.client}
        payment={(data, actions) => payment(data, actions)}
        onAuthorize = {(data, actions) => onAuthorize(data, actions)}
        onCancel={(data, actions) => onCancel(data, actions)}
        onError ={(error) => onError(error)}
        style={paypalConf.style}
        commit
        locale="es_MX"
        />
    );
};

export default PaypalCheckoutButton;
