export const Flutterconfig = (
  amount: number,
  phone_number: number,
  email: string,
  name: string
) => ({
  public_key: process.env.Fluter_Public_Key as string,
  tx_ref: Date.now().toString(),
  amount,
  currency: "NGN",
  payment_options: "card,mobilemoney,ussd",
  customer: {
    email,
    phone_number: phone_number.toString(),
    name,
  },
  customizations: {
    title: "ODS 2024",
    description: "Payment for Order",
    logo: "http://res.cloudinary.com/ddjt9wfuv/image/upload/v1709210521/product/bdalfy8btveazx5kiyq6.jpg",
  },
});
