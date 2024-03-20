import React from "react";
import SideBar from "./content/sidebar";
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SideBar />
      <section className="w-full md:pl-[96px] min-[1140px]:pl-[270px]">
        {children}
      </section>
    </>
  );
}