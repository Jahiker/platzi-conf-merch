import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const PaypalPay = ({ CLIENT_ID }) => {
  return (
    <PayPalScriptProvider
      options={{
        'client-id': CLIENT_ID,
        currency: 'USD',
      }}
    >
      <PayPalButtons
        style={{ layout: 'vertical' }}
        disabled={false}
        createOrder={(data, actions) =>
          actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    value: Number.parseFloat(handleSumTotal()).toFixed(2),
                  },
                },
              ],
            })
            .then((orderId) => {
              return orderId;
            })
        }
        onApprove={(data, actions) => {
          return actions.order
            .capture()
            .then((data) => {
              // Your code here after capture the
              paymentHandleSuccess(data);
            })
            .catch((error) => console.log(error));
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PaypalPay;
