import React, { useState } from 'react';
import { PaystackButton } from 'react-paystack';
import { useStateContext } from '../context/StateContext';
import { useRouter } from 'next/router';

const Payment = () => {
  const publicKey = "pk_test_6bcfa7fac8e0dcf2a352b04ca4c7d1116bc27f3c";
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [colour, setColour] = useState('');
  const { totalPrice, cartItems} = useStateContext();
  const amount = totalPrice ;

  const push = () => {
    router.push('/success')
  };

  const resetForm = () => {
    setEmail('');
    setName('');
    setAddress('');
    setColour('');
  };


  const componentProps = {
    currency: "ZAR",
    email,
    amount,
    metadata:{
      "custom_fields":[
        {
          "display_name":"Colour",
          "variable_name":"Colo",
          "value":colour
        },
        {
          "display_name":"Address",
          "variable_name":"Address",
          "value":address
        },
        {
           "display_name": "Item",
           "variable_name": "Item",
           "value": cartItems
        } 
      ]
    },
    publicKey,
    text: 'Purchase',
    onSuccess: () => {
      resetForm();
      push();
    },
    onClose: () => alert("You have cancelled your transaction"),
  };

  return (
    <div className="App">
      <div className="container">
        <div className="item">
          <div className="overlay-effect"></div>
           <div className="item-details">
       
         <p className="item-details__amount">R{amount / 100}</p> 
          </div>
        </div>
        <div className="checkout">
          <div className="checkout-form">
            <p>Agriculture and Young delivers via Pep</p>
            <div className="checkout-field">
              <label>Full name</label>
              <input
                required
                placeholder='First and Last name'
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="checkout-field">
              <label>Email</label>
              <input
                placeholder='Email address'
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="checkout-field">
              <label>Colour</label>
              <input
                placeholder='Colour of clothing item'
                type="text"
                id="color"
                value={colour}
                onChange={(e) => setColour(e.target.value)}
              />
            </div>
            <div className="checkout-field">
              <label>Address</label>
              <input
                placeholder='Nearest Pep store'
                required
                type="text"
                id="phone"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <PaystackButton className="paystack-button" {...componentProps} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;