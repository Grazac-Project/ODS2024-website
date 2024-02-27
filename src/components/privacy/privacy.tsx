"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

function Privacy({
  privacy,
}: {
  privacy: { id: string; title: string; content: string }[];
}) {
  const [activeSection, setActiveSection] = useState<string | null>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("main div");
      sections.forEach((section: Element) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.clientHeight;
        if (document.body.scrollTop >= sectionTop - sectionHeight / 3) {
          setActiveSection(section.getAttribute("id"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex items-start pt-2">
      <aside className="w-fit p-4 rounded-xl sticky top-0 border border-[#979797] hidden md:block">
        <ul className="w-fit flex flex-col gap-4 font-medium">
          {privacy.map((item, index) => {
            return (
              <li key={item.id} className="p-2 text-header font-montserrat">
                <Link
                  href={"/privacy#" + item.id}
                  style={{
                    fontWeight: activeSection === item.id ? "bold" : "",
                  }}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
      <main className="flex-1 md:pl-8 lg:pl-14">
        {privacy.map((item) => {
          return (
            <div key={item.id} id={item.id} className="mb-10 last:mb-0">
              <h4 className="text-color-600 font-bold text-2xl font-montserrat mb-2">
                {item.title}
              </h4>
              <p className="text-header font-nunito">{item.content}</p>
            </div>
          );
        })}
      </main>
    </div>
  );
}

export default Privacy;
