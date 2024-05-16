import React from "react";
import { SpeakerDetails } from "@/app/(home)/speakers/[speaker]/page";
import CartPage from "../../content/cartPage";
import { decryptString } from "@/utils";

const page = ({ searchParams: { cartid } }: SpeakerDetails) => {
  const decryptedId = decryptString(cartid);
  return (
    <>
      <CartPage Cart_id={decryptedId} />
    </>
  );
};

export default page;
