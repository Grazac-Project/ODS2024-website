"use server";

import { LoginSchema } from "@/schema";
import * as z from "zod";
import { baseUrl } from "./baseurl";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields.success) {
    return {
      error: "Login Failed. Please check your email and password.",
    };
  }

  const { email, password } = validatedFields.data;

  try {
    const data = await fetch(`https://staging.ogundigitalsummit.com/api/admin/login`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
        credentials: "include",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const res = await data.json();

    if (res.status === 200 || res.ok) {
      const user = res.admin;

      return {
        success: "Login successfully",
        user,
      };
    }
    if (res.status === 400) {
      return {
        error: "Email or Phone number already exist",
      };
    }

    return {
      error: res.message,
    };
  } catch (error) {
    console.log(error);
    return {
      error: "Something went wrong.",
    };
  }
};
