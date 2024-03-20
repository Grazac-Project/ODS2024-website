"use server";

import { prisma } from "@/utils/db";

export const Flutterconfig = (
  amount: number,
  phone_number: number,
  email: string,
  name: string
) => ({
  tx_ref: Date.now().toString(),
  amount,
  currency: "NGN",
  payment_options: "card,mobilemoney,ussd",
  customer: {
    email,
    phone_number: phone_number.toString(),
    name,
  },
});

export const CompleteOrder = async () => {};

// export const updatePaymentStatus = async (
//   userId: string,
//   newPaymentStatus: boolean
// ) => {
//   try {
//     const updatedUser = await prisma.user.update({
//       where: {
//         id: userId,
//       },
//       data: {
//         paymentStatus: newPaymentStatus,
//       },
//     });

//     return { user: updatedUser, error: null };
//   } catch (error) {
//     console.error(`Error updating paymentStatus for user ${userId}: ${error}`);
//     return {
//       user: null,
//       error: `Error updating paymentStatus`,
//     };
//   }
// };
