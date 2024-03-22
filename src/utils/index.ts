import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as handlebars from "handlebars";
import { OrderMail } from "./emails/order";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Returns an Encrypted a string .
 * @function encryptString - Encodes or encrypts a string using a base64 Buffer
 * @returns A encoded string .
 */
export const encryptString = (str: string): string => {
  const buffer = Buffer.from(str);
  return buffer.toString("base64");
};

/**
 * Decodes and Returns a string .
 * @function decryptString - Decodes or decrypts an encrypted string Buffer
 * @returns A decoded string .
 */

export const decryptString = (str: string): string => {
  const buffer = Buffer.from(str, "base64");
  return buffer.toString();
};

/**
 * Compiles an order email template with provided data.
 * @param name The name of the recipient.
 * @param url The URL associated with the order.
 * @returns The compiled HTML body of the order email.
 */

export function compileOrder(name: string, url: string) {
  const template = handlebars.compile(OrderMail);
  const htmlBody = template({
    name: name,
    url: url,
  });
  return htmlBody;
}
