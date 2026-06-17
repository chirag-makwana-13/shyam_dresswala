import { business } from "@/data/business";

export function getWhatsAppUrl(productName?: string, customMessage?: string): string {
  let message: string;

  if (customMessage) {
    message = customMessage;
  } else if (productName) {
    message = `Hello Shyam Dresswala,\n\nI am interested in renting:\n\nProduct Name: ${productName}\n\nPlease share availability and pricing details.\n\nThank You.`;
  } else {
    message = `Hello Shyam Dresswala,\n\nI am interested in your rental collection. Please share more details.\n\nThank You.`;
  }

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${business.whatsapp}?text=${encodedMessage}`;
}

export function getCallUrl(): string {
  return `tel:${business.phoneRaw}`;
}
