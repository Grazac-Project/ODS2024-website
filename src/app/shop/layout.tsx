import ProductDetailsMOdal from "@/components/miscellaneous/ProductDetailsMOdal";
import CartModal from "@/components/miscellaneous/CartModal";
import CartButton from "@/components/shop/CartButton";
import AreYouSureModal from "./areyousuremodal";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <CartButton />
      <CartModal />
      <ProductDetailsMOdal />
      <AreYouSureModal />
    </>
  );
}
