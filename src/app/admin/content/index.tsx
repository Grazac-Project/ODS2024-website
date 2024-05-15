"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
import { useFetch } from "@/hooks/useFetch";
import { subscribe } from "@prisma/client";
import React from "react";

const Subpage = () => {
  const [Subscribers, setSubscribers] = React.useState<subscribe[]>();
  const url = "/api/admin/cart";
  const { isLoading, data, error } = useFetch(url);
  React.useEffect(() => {
    if (data) {
      setSubscribers(data.subcribers);
    }
  }, [data]);
  return (
    <div className="container mx-auto">
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
export { Subpage };
