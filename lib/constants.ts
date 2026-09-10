export const WHATSAPP_NUMBER = '966569138258';
export const PHONE_NUMBER = '+966 56 913 8258';
export const EMAIL = 'info@umrahtransportsaudia.com';
export const ADDRESS = 'Al Hedaya Road, Makkah 24242, Saudi Arabia';
export const SITE_URL = 'https://umrahtransportsaudia.com';
export const SITE_NAME = 'Umrah Transport Saudia';

export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WA_MESSAGE = 'Hello, I need private transport for Umrah. Can you help me?';
export const BOOKING_WA_MESSAGE = 'Hello, I would like to book a transfer. Please send me your available vehicles and pricing.';
