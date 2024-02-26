import React from "react";
import AddProductForm from "@/components/form/addproductform";
import { X } from "lucide-react";

export const metadata = {
  title: "Add Product - Ogun Digital Summit 2024",
};

const AddProductPage = () => {
  return (
    <>
      <section className="mx-auto items-center justify-center w-[70%]">
        <div className="flex items-center justify-between w-full border-b border-[#e1e1e1] dark:border-primary-light pb-4 pl-4 px-4 md:pl-8 ">
          <h3 className="text-lg md:text-2xl font-medium  text-header">
            Add Client
          </h3>
          <button
            type="button"
            tabIndex={0}
            aria-label="Close"
            className="text-[#e80000] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light rounded-full"
          >
            <X size={24} />
          </button>
        </div>
        <AddProductForm />
      </section>
    </>
  );
};

export default AddProductPage;
