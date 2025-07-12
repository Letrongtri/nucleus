export const strongPasswordRegex: RegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

/**
 * Check if password is strong.
 * @param password - The password to validate.
 * @returns Returns true if the password is strong, otherwise false.
 */
export function isStrongPassword(password: string): boolean {
  return strongPasswordRegex.test(password);
}
