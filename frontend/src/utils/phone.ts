/**
 * Utility to parse, validate, and format Indian phone numbers for WhatsApp.
 * Indian mobile numbers: 10 digits starting with 6, 7, 8, or 9.
 */
export interface IndianPhoneCheckResult {
  isIndian: boolean;
  rawDigits: string;
  formatted10Digit: string | null;
  whatsappRecipient: string | null;
}

export function parseIndianPhoneNumber(input: string): IndianPhoneCheckResult {
  if (!input) {
    return {
      isIndian: false,
      rawDigits: "",
      formatted10Digit: null,
      whatsappRecipient: null,
    };
  }

  // Strip all non-digit characters
  const digits = input.replace(/\D/g, "");

  let mobile10 = "";

  // Case 1: Standard 10-digit mobile number (e.g. 9876543210)
  if (digits.length === 10 && /^[6-9]\d{9}$/.test(digits)) {
    mobile10 = digits;
  }
  // Case 2: 11-digit starting with trunk prefix '0' (e.g. 09876543210)
  else if (digits.length === 11 && digits.startsWith("0") && /^[6-9]\d{9}$/.test(digits.slice(1))) {
    mobile10 = digits.slice(1);
  }
  // Case 3: 12-digit with country code '91' (e.g. 919876543210 or +919876543210)
  else if (digits.length === 12 && digits.startsWith("91") && /^[6-9]\d{9}$/.test(digits.slice(2))) {
    mobile10 = digits.slice(2);
  }
  // Case 4: 13-digit with '091'
  else if (digits.length === 13 && digits.startsWith("091") && /^[6-9]\d{9}$/.test(digits.slice(3))) {
    mobile10 = digits.slice(3);
  }

  if (mobile10) {
    return {
      isIndian: true,
      rawDigits: digits,
      formatted10Digit: mobile10,
      whatsappRecipient: `whatsapp:+91${mobile10}`,
    };
  }

  return {
    isIndian: false,
    rawDigits: digits,
    formatted10Digit: null,
    whatsappRecipient: null,
  };
}
