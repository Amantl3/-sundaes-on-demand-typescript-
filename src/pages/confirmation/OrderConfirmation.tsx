import  { useState, useEffect } from "react";
import { useOrderDetails } from "../../contexts/UseOrderDetails";
import axios from "axios";
import { Button } from "react-bootstrap";
import AlertBanner from '../common/AlertBanner';
import {type OrderEntryProps} from '../entry/OrderEntry'

export default function OrderConfirmation({ setStep }: OrderEntryProps) { 
const {resetOrder} = useOrderDetails();
const [orderNumber, setOrderNumber] = useState(null);
const [error, setError] = useState(false);

   useEffect(() => {

         axios.post(`http://localhost:3030/order`)
         .then((response) =>{
            setOrderNumber(response.data.orderNumber);
            
         })
         .catch(()=>{
            
            setError(true);
         })

   }, []); 
    function handleClick() {
        resetOrder();
        setStep("order");
    }
    const newOrderButton = (<Button onClick={handleClick}>create new order</Button>);

    if (error){
      return(<>
        <AlertBanner message={''} variant={''}/>
        {newOrderButton}
      </>);
    }
      
    if (orderNumber) {return (
    <div>
      <h1>Thank you!</h1>
      <p>Your order number: {orderNumber}</p>
      {newOrderButton}
    </div>
  );
  } else {
    return ( <div>loading...</div>);
    }
}
