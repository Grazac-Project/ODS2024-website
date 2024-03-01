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
 * Sets a key-value pair in the session storage.
 * @function SetToSessionStorage
 * @param {string} key
 * @param {any} value
 */

export const SetToSessionStorage = (key: string, value: any): void => {
  if (typeof sessionStorage === "undefined") return;
  try {
    const serializedValue = JSON.stringify(value);
    sessionStorage.setItem(key, serializedValue);
  } catch (error) {
    //    console.error(`Error setting item to session storage: ${error}`);
  }
};

/**
 * Retrieves a value from the session storage based on the provided key.
 * @function GetFromSessionStorage
 * @param {string} key
 * @returns {string | null
 */

export const GetFromSessionStorage = (key: string): string | null => {
  if (typeof sessionStorage === "undefined") return null;
  try {
    const storedValue = sessionStorage?.getItem(key);
    return storedValue !== null ? storedValue : null;
  } catch (error) {
    //    console.error(`Error getting item from session storage: ${error}`);
    return null;
  }
};
