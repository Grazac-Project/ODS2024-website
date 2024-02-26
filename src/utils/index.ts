export function formatPrice(price: number) {
  return (price / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "NGN",
  });
}



export function calculateDiscountedPrice(
  originalPrice: number,
  discountPercentage: number
): number | { error: string } {
  if (originalPrice < 0 || discountPercentage < 0 || discountPercentage > 100) {
    return {
      error:
        "Invalid input values. Please provide non-negative values and a discount percentage between 0 and 100.",
    };
  }

  const discountAmount = (discountPercentage / 100) * originalPrice;
  const discountedPrice = originalPrice - discountAmount;

  return discountedPrice;
}
