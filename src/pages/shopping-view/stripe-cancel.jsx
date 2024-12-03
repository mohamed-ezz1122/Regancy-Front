import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function StripeCancel() {

    const navigate = useNavigate();
    <Card className="p-10">
    <CardHeader className="p-0">
      <CardTitle className="text-4xl text-center ">Payment is Canceled! </CardTitle>
    </CardHeader>
    <Button className="mt-5" onClick={() => navigate("/checkout")}>
      View Orders
    </Button>
  </Card>
}
