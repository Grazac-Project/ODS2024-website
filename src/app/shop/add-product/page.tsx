import React from "react";
import AddProductForm from "@/components/form/addproductform";

export const metadata = {
  title: "Add Product - Ogun Digital Summit 2024",
};

const AddProductPage = () => {
  return (
    <>
      <section className="mx-auto items-center justify-center max-w-[500px]">
        <AddProductForm />
      </section>
    </>
  );
};

export default AddProductPage;
