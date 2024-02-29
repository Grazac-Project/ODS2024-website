import React from "react";
import PaymentForm from "./form";

interface PageProps {
  searchParams: {
    [key: string]: string | undefined;
  };
}

const Payment = ({ searchParams: { cartId, price } }: PageProps) => {
  const priceNumber = price ? parseFloat(price) : undefined;

  return (
    <>
      <PaymentForm cartId={cartId} price={priceNumber} />
    </>
  );
};

export default Payment;
