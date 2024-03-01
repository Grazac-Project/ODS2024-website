import React from "react";
import PaymentForm from "./form";

interface PageProps {
  searchParams: {
    [key: string]: string | undefined;
  };
}

const Payment = ({ searchParams: { cartId, price } }: PageProps) => {
  return (
    <>
      <PaymentForm />
    </>
  );
};

export default Payment;
