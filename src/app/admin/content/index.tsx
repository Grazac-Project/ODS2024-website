"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useFetch } from "@/hooks/useFetch";
import { Product, subscribe } from "@prisma/client";
import Image from "next/image";
import React from "react";

const Subpage = () => {
  const [Subscribers, setSubscribers] = React.useState<subscribe[]>();
  const url = "/api/subscribe";
  const { isLoading, data, error } = useFetch(url);
  React.useEffect(() => {
    if (data) {
      setSubscribers(data.subcribers);
    }
  }, [data]);
  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-2xl font-bold mb-4">Subscribers</h1>
      {isLoading && <p>Loading...</p>}
      {/* @ts-ignore */}
      {error && <p>Error: {error}</p>}
      {/* @ts-ignore */}
      {Subscribers?.length! > 0 ? (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">ID</th>
              <th className="border border-gray-300 p-2">Email</th>
            </tr>
          </thead>
          <tbody>
            {Subscribers?.map((subscriber) => (
              <tr key={subscriber.id}>
                <td className="border border-gray-300 p-2">{subscriber.id}</td>
                <td className="border border-gray-300 p-2">
                  {subscriber.email}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No subscribers found.</p>
      )}
    </div>
  );
};

const ProducPage = () => {
  const [products, setProducts] = React.useState<Product[]>([]);
  const url = "/api/shop/product";
  const { isLoading, data, error } = useFetch(url);
  const [Open, setOpen] = React.useState(false);
  const [product, setProduct] = React.useState<Product | undefined>(undefined);

  React.useEffect(() => {
    if (data) {
      setProducts(data.products || []);
    }
  }, [data]);

  // console.log(products);

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Discount</TableHead>
            <TableHead>Image</TableHead>
            <TableHead className="text-right">Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow
              key={product.id}
              onClick={() => {
                setProduct(product);
                setOpen(true);
              }}
            >
              <TableCell>{product.name}</TableCell>
              <TableCell className=" line-clamp-3">
                {product.description}
              </TableCell>
              <TableCell>{product.discount}</TableCell>
              <TableCell>{product.image}</TableCell>
              <TableCell>{product.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Details onOpen={Open} setonOpen={setOpen} product={product!} />
    </div>
  );
};

interface Details {
  product?: Product;
  onOpen: boolean;
  setonOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Details = ({ product, onOpen, setonOpen }: Details) => {
  return (
    <>
      <Sheet open={onOpen} onOpenChange={setonOpen}>
        <SheetContent className="w-full overflow-y-auto overflow-x-hidden">
          <SheetHeader>
            <SheetTitle>{product?.name}</SheetTitle>
            <SheetClose />
          </SheetHeader>
          <SheetDescription>
            <Image
              src={product?.image!}
              alt={product?.name!}
              width={300}
              height={300}
            />
            <p>{product?.description}</p>
            <p>Price: {product?.price}</p>
          </SheetDescription>
          <SheetFooter>
            <SheetClose asChild>
              <Button>Close</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
};
export { Subpage, ProducPage };
