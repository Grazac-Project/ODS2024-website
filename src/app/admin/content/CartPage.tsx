"use client";

import { useFetch } from "@/hooks/useFetch";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Buyer } from "@prisma/client";
import { Car, Verify, FolderOpen } from "iconsax-react";
import { sendForDelivery, markAsDelivered } from "@/actions/cart";
import { useToast } from "@/components/ui/use-toast";

const CartDetails = ({
  id,
  name,
  cartId,
  paymentId,
  email,
  phoneNumber,
  tracking,
  price,
  updatedAt,
}: Buyer) => {
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState(null);
  const { toast } = useToast();

  const handleSendForDelivery = async () => {
    setIsSending(true);
    setError(null);
    try {
      await sendForDelivery(id);
      toast({
        title: "Updated delivery",
        description: "Sent sucesssfully",
      });
    } catch (err: any) {
      setError(err);
    } finally {
      setIsSending(false);
    }
  };

  const handleMarkAsDelivered = async () => {
    try {
      await markAsDelivered(id);
      alert('Tracking status updated to "Delivered".');
    } catch (error) {
      console.error("Error updating delivery status:", error);
      alert("Failed to update delivery status.");
    }
  };

  const isDelivered = tracking === "Delivered";
  return (
    <AccordionItem value={id}>
      <AccordionTrigger>{name}</AccordionTrigger>
      <AccordionContent>
        <div className="transition-all duration-500 text-sm font-medium">
          <div className="flex items-center justify-between py-[18px] border-b border-[#E1E1E1] leading-6 font-medium">
            <div className="flex items-center gap-x-4 text-header">
              <p>Buyer: {name}</p>
              <p className="text-xs text-header font-normal">Buyers ID: {id}</p>
            </div>
            <div className="flex items-center gap-x-3">
              <span>status: </span>
              <button
                className="flex items-center gap-x-2 text-[#23a8d4]"
                onClick={
                  tracking === "To be Shipped"
                    ? handleSendForDelivery
                    : handleMarkAsDelivered
                }
                disabled={isDelivered}
              >
                {tracking === "In Transit" ? (
                  <>
                    <span>In Transit</span>
                  </>
                ) : tracking === "Delivered" ? (
                  <>
                    <span>Delivered</span>
                  </>
                ) : (
                  <>
                    <Car />
                    <span>Send For Delivery</span>
                  </>
                )}
              </button>
            </div>
          </div>
          <div className="flex items-center gap-x-3 w-full justify-between">
            <p className="py-4 text-justify text-header ">CartId: {cartId}</p>
            <button
              className="flex items-center gap-x-2 text-primary "
              // onClick={() => handleEditButtonClick(task?._id!)}
            >
              <FolderOpen />
              <span>View Cart</span>
            </button>
          </div>
          <div className="flex items-center gap-x-3 w-full justify-between">
            <p className="py-4 text-justify text-header ">
              paymentId: {paymentId}
            </p>
            <button
              className="flex items-center gap-x-2 text-primary "
              // onClick={() => handleEditButtonClick(task?._id!)}
            >
              <Verify />
              <span>Verify Payment</span>
            </button>
          </div>
          {/* <p className="py-4 text-justify text-header ">Address: {address}</p> */}
          <p className="py-4 text-justify text-header ">Email: {email}</p>
          <p className="py-4 text-justify text-header ">
            PhoneNumber: {phoneNumber}
          </p>
          <p className="py-4 text-justify text-header ">Amount Paid: {price}</p>
          <p className="py-4 text-justify text-header ">
            Date Of Order: {updatedAt?.toString() || ""}
          </p>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export const CartPage = () => {
  const url = "/api/admin/cart";
  const { isLoading, data, error } = useFetch(url);
  const [buyers, setBuyers] = useState<Buyer[]>();

  useEffect(() => {
    if (data) {
      setBuyers(data.buyers);
    }
  }, [data]);
  return (
    <div className="px-4">
      {buyers && buyers.length > 0 ? (
        <Accordion type="multiple" className="w-full">
          {buyers &&
            buyers.map((buyer) => <CartDetails key={buyer.id} {...buyer} />)}
        </Accordion>
      ) : (
        <p className="w-full text-center">NO BUYERS YET</p>
      )}
    </div>
  );
};

// const Flutterwave = require('flutterwave-node-v3');
// const flw = new Flutterwave("public key", "secret key");
// const payload = {"id": "288200108"};
// const response = await flw.Transaction.verify(payload)

// const Flutterwave = require("flutterwave-node-v3");
// const flw = new Flutterwave("public key", "secret key");

// const payload = {
//   from: "2020-01-01",
//   to: "2020-05-05",
// };

// const response = await flw.Transaction.fetch(payload);
// https://developer.flutterwave.com/reference/endpoints/transactions#verify-a-transaction
