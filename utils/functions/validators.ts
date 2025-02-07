export function fileSizeCheck(size: number, limit: number): boolean {
  if (size > limit) {
    return false;
  }
  return true;
}

export function imageFileTypeCheck(fileName: string): boolean {
  const allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
  if (!allowedExtensions.test(fileName)) {
    return false;
  }
  return true;
}

export function pdfTypeCheck(fileName: string): boolean {
  const allowedExtensions = /(\.pdf)$/i;
  if (!allowedExtensions.test(fileName)) {
    return false;
  }
  return true;
}

export function csvTypeCheck(fileName: string): boolean {
  const allowedExtensions = /(\.csv)$/i;
  if (!allowedExtensions.test(fileName)) {
    return false;
  }
  return true;
}

export function isNotEmpty(str?: string): boolean {
  const pattern = /\S+/;
  return pattern.test(str || "");
}

export function isEmpty(str?: string): boolean {
  return !isNotEmpty(str);
}

export function isEmailAddress(str: string): boolean {
  const pattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return pattern.test(str);
}

export function isPhoneNumber(str: string): boolean {
  const pattern = /^\d{11}$/;
  return pattern.test(str);
}

export function isExpirationDate(str: string): boolean {
  const pattern = /^(0[1-9]|1[0-2])\/(20\d{2}|[2-9]\d)$/;
  return pattern.test(str);
}

export function isAccountNumber(str: string): boolean {
  const pattern = /^\d{10}$/;
  return pattern.test(str);
}

export function isRoutingNumber(str: string): boolean {
  const pattern = /^\d*$/;
  return pattern.test(str);
}

export function validateCreditCardExpiry(expiryDate: string): boolean {
  if (!isExpirationDate(expiryDate)) {
    return false;
  }

  const [monthStr, yearStr] = expiryDate.split("/");
  const month = parseInt(monthStr, 10);
  const year = parseInt(yearStr, 10);

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear() % 100;
  const currentMonth = currentDate.getMonth() + 1;

  if (year < currentYear || (year === currentYear && month < currentMonth)) {
    return false;
  }

  return true;
}

// Allow blank email but not invalid email value
export function isErrorInEmailField(str?: string): boolean {
  if (isEmpty(str)) return false;
  return !isEmailAddress(str || "");
}

export function isErrorInPhoneField(str?: string): boolean {
  if (isEmpty(str)) return false;
  return !isPhoneNumber(str || "");
}

export function isErrorInExpirationDate(str?: string): boolean {
  if (isEmpty(str)) return false;
  return !validateCreditCardExpiry(str || "");
}

export function isErrorInAccountNumber(str?: string): boolean {
  if (isEmpty(str)) return false;
  return !isAccountNumber(str || "");
}

export function isErrorInRoutingNumber(str?: string): boolean {
  if (isEmpty(str)) return false;
  return !isRoutingNumber(str || "");
}

export function isErrorInSSNField(str?: string): boolean {
  if (isEmpty(str)) return false;
  return str?.length !== 11;
}
