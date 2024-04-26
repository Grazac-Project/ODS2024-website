import CartButton from "./content/CartButton";
import CartModal from "./content/CartModal";
import ProductDetailsMOdal, {
  NewProductDetailsMOdal,
} from "./content/ProductDetailsMOdal";
import AreYouSureModal from "./content/areyousuremodal";

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
      <NewProductDetailsMOdal />

      <AreYouSureModal />
    </>
  );
}
