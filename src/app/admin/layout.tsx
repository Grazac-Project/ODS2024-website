import React from "react";
import SideBar from "./content/sidebar";
import NavBar from "./content/NavBar";
import DeleteSpeaker from "./content/DeleteSpeakerModal";
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SideBar />
      <section className="w-full md:pl-[96px] min-[1140px]:pl-[270px]">
        <NavBar />
        <div className="flex w-full flex-col h-full relative max-container pt-12 md:pt-0">
          {children}
          <DeleteSpeaker />
        </div>
      </section>
    </>
  );
}
