import { business } from "@/data/business";
import { dictionaries, type Lang } from "@/i18n/translations";

export function getWhatsAppUrl(
  productName?: string,
  customMessage?: string,
  productImage?: string,
  lang: Lang = "en"
): string {
  const w = dictionaries[lang].whatsapp;
  let message: string;

  if (customMessage) {
    message = customMessage;
  } else if (productName) {
    message = `${w.productIntro} ${productName}\n${
      productImage ? `${w.productImage} ${business.siteUrl}${productImage}\n` : ""
    }\n${w.productOutro}`;
  } else {
    message = w.general;
  }

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${business.whatsapp}?text=${encodedMessage}`;
}

export function getCallUrl(): string {
  return `tel:+${business.phoneRaw}`;
}
