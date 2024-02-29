import React from "react";
import PaymentForm from "./form";

interface PageProps {
  searchParams: {
    [key: string]: string | undefined;
  };
}

const Payment = ({ searchParams: { cartId, price } }: PageProps) => {
  console.log(price, cartId);
  return (
    <>
      <PaymentForm cartId={cartId} price={price} />
    </>
  );
};

export default Payment;
