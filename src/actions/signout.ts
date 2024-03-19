"use server";

import { signOut } from "@/auth";

export async function handleSignOut() {
  try {
    await signOut();
  } catch (error) {
    console.error("Error occurred while signing out:", error);
    throw error;
  }
}
