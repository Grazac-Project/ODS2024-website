"use client";

import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { decryptString } from "@/utils";
import { useStateCtx } from "@/context/StateCtx";
import { useRouter } from "next/navigation";

const Makepayment = () => {
  const searchParams = useSearchParams();
  const payment = searchParams.get("paymentstatus");
  const id = searchParams.get("id");
  const price = searchParams.get("price");
  const name = searchParams.get("name");
  const email = searchParams.get("email");
  const phone = searchParams.get("phone");
  console.log(payment, id, price, name, email, phone);

  const originalname = decryptString(name!);
  const originalemail = decryptString(email!);
  const originalphone = decryptString(phone!);
  const originalprice = price;

  console.log(originalemail, originalname, originalprice, originalphone);

  const config = {
    public_key: "FLWPUBK_TEST-b6c44d3213f2d2b3c0c3142f3ab81b72-X",
    tx_ref: Date.now().toString(),
    amount: parseFloat(price!),
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: originalemail,
      phone_number: originalphone,
      name: originalname,
    },
    customizations: {
      title: "ODS 2024",
      description: "Payment for Order",
      logo: "http://res.cloudinary.com/ddjt9wfuv/image/upload/v1709210521/product/bdalfy8btveazx5kiyq6.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);
  const router = useRouter();
  const { setShowOptionModal } = useStateCtx();

  return (
    <div>
      {" "}
      <button
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
              console.log(response.status);
              closePaymentModal();
              if (response.status === "successful") {
                router.push("/shop/success?paymentstatus=true");
              }
            },
            onClose: () => {
              setShowOptionModal(true);
            },
          });
        }}
      >
        Payment with React hooks
      </button>
    </div>
  );
};

export default Makepayment;

// setTimeout(() => {
//   // @ts-ignore
//   router.push(
//     `/shop/makepayment?paymentstatus='false'&id=${data.User.id}&price=${
//       data.User.price
//     }&name=${encryptString(data.User.name)}&email=${encryptString(
//       data.User.email
//     )}&phone=${encryptString(data.User.phoneNumber.toString())}`
//   );
// }, 1000);

//   handleFlutterPayment({
//     callback: (response) => {
//       console.log(response.status);
//       closePaymentModal();
//       if (response.status === "completed") {
//         router.push("/shop/success?paymentstatus=true");
//       }
//     },
//     onClose: () => {
//       setShowOptionModal(false);
//     },
//   });
