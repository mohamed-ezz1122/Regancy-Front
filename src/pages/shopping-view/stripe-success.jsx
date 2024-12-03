import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { capturePaymentStripe } from '@/store/shop/order-slice';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function StripeSuccess() {
  const [isPaymentStartByStribe, setIsPaymentStartByStribe] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

//confirm function
  function confirmPayment(){
    const orderId = JSON.parse(sessionStorage.getItem("currentOrderId"));
    console.log(orderId);
    dispatch(capturePaymentStripe({orderId})).then((data)=>{

      console.log(data.payload.message);
      if(data?.payload?.success){
      
      console.log("✔");
      Swal.fire({
        position: "center",
        icon: "success",
        title: data.payload.message,
        showConfirmButton: false,
        timer: 1500
      });
      
      }
      navigate('/')
      
      
    })

   
    
    
  }
  return (
    <Card>
    <CardHeader>
      <CardTitle>Please click in confirm Button To Complet Payment ❤</CardTitle>

      <div className="mt-4 w-56">
            <Button onClick={confirmPayment} className="w-full mt-10">
              {isPaymentStartByStribe
                ? "confirm Stripe ..."
                : "confirm Stripe Payment"}
            </Button>
          </div>
    </CardHeader>
  </Card>
  )
}


export default StripeSuccess