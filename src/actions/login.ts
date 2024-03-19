"use server";

import { LoginSchema } from "@/schema";
import * as z from "zod";
import { signIn } from "@/auth";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields.success) {
    return {
      error: "Login Failed. Please check your email and password.",
    };
  }

  const { email, password } = validatedFields.data;

  try {
    const data = await fetch("/api/login", {
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
    console.log(data.status);
    const res = await data.json();
    if (data.status === 201 || res.ok) {
      console.log(res);
      signIn(res.token);
      const user = res.user;

      return {
        success: "Login successfully",
        user,
      };
    }
    if (data.status === 400) {
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
