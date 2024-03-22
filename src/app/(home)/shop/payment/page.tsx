import React from "react";
import PaymentForm from "./form";
import FORMCART from "./cart";

const Payment = () => {
  return (
    <div className="container flex">
      <PaymentForm />
      <div className="hidden md:flex w-1/2">
        <FORMCART />
      </div>
    </div>
  );
};

export default Payment;
