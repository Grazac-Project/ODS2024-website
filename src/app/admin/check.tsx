"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const Admin = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  useEffect(() => {
    const isLogin = localStorage.getItem("admin");
    if (!isLogin) {
      router.push("/login");
    }
  }, []);
  return <>{children}</>;
};

export default Admin;
