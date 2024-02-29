export const Flutterconfig = (
  amount: number,
  phone_number: string,
  email: string,
  name: string
) => ({
  public_key: process.env.Fluter_Public_Key,
  tx_ref: Date.now(),
  amount,
  currency: "NGN",
  payment_options: "card,mobilemoney,ussd",
  customer: {
    email,
    phone_number,
    name,
  },
  customizations: {
    title: "ODS 24",
    description: "Payment for Order",
    // logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
  },
});


