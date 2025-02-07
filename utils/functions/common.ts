import moment from "moment";

export function copyValue(value: string): void {
  const dummy = document.createElement("TEXTAREA") as HTMLTextAreaElement;
  document.body.appendChild(dummy);
  dummy.innerHTML = value;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
}

export function getCookie(name: string): string {
  if (typeof document === "undefined") return "";
  const value: string = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts && parts.length > 0 && parts.length === 2) {
    const lastStringPart = parts.pop();
    if (lastStringPart) {
      const lastStringValue = lastStringPart.split(";").shift();
      if (lastStringValue) {
        return lastStringValue;
      }
    }
  }
  return "";
}

export const maskSSN = (ssn: string | null | undefined) => {
  return !ssn
    ? ""
    : ssn.length > 11
      ? ssn.substr(0, 11)
      : ssn
          .replace(/[^\d*]/g, "")
          .replace(
            /^(.{1,3})(.{1,2})?(.{1,4})?.*$/,
            (_, x, y, z) =>
              x.replace(/\d/g, "*") +
              (y ? `-${y.replace(/\d/g, "*")}` : "") +
              (z ? `-${z}` : "")
          );
};

export const formatSSN = (ssn: string | null | undefined) => {
  if (!ssn) {
    return "";
  }
  const cleanedCard = ssn.replace(/[^\d]/g, "");

  return ssn.length > 11
    ? cleanedCard.substr(0, 11)
    : cleanedCard
        .replace(/[^\d]/g, "")
        .replace(
          /^(.{1,3})(.{1,2})?(.{1,4})?.*$/,
          (_, x, y, z) => x + (y ? `-${y}` : "") + (z ? `-${z}` : "")
        );
};

export const formatCard = (card: string | null | undefined) => {
  if (!card) {
    return "";
  }
  const cleanedCard = card.replace(/[^\d]/g, "");

  return cleanedCard.length > 19
    ? cleanedCard.substr(0, 19)
    : cleanedCard.replace(
        /^(.{1,4})(.{1,4})?(.{1,4})?(.{1,4})?.*$/,
        (_, a, b, c, d) =>
          a + (b ? ` ${b}` : "") + (c ? ` ${c}` : "") + (d ? ` ${d}` : "")
      );
};

export const maskCard = (card: string | null | undefined) => {
  return !card
    ? ""
    : card.length > 19
      ? card.substr(0, 19)
      : card
          .replace(/[^\d*]/g, "")
          .replace(
            /^(.{1,4})(.{1,4})?(.{1,4})?(.{1,4})?.*$/,
            (_, a, b, c, d) => `•••• •••• ••••` + (d ? ` ${d}` : "")
          );
};

export const formatExp = (exp: string | null | undefined) => {
  return !exp
    ? ""
    : exp.length > 5
      ? exp.substr(0, 5)
      : exp
          .replace(/[^\d*]/g, "")
          .replace(
            /^(.{1,2})(.{1,2})?.*$/,
            (_, a, b) => a + (b ? `/${b}` : "")
          );
};

// predict actual ssn value from new masked value
export const getActualSSNFromMaskedValue = (
  oldActualValue: string,
  newMaskedValue: string
) => {
  const oldActualValueLength = oldActualValue.length;
  const newMaskedValueLength = newMaskedValue.length;
  if (oldActualValueLength === newMaskedValueLength) return oldActualValue;

  // everything is removed
  if (newMaskedValueLength === 0) return "";

  // something is added
  if (oldActualValueLength < newMaskedValueLength) {
    return `${oldActualValue}${newMaskedValue.charAt(
      newMaskedValueLength - 1
    )}`;
  }

  // something is removed
  if (oldActualValueLength > newMaskedValueLength) {
    return `${oldActualValue.slice(0, -1)}`;
  }
};

export async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const isCardExpired = (
  expiryMonth: number,
  expiryYear: number
): boolean => {
  const expiryDate = moment(`${expiryYear}-${expiryMonth}`, "YYYY-MM");
  const currentDate = moment();
  return expiryDate.isBefore(currentDate);
};
