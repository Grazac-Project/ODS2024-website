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
