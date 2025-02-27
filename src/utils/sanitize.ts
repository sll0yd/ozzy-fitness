import DOMPurify from 'dompurify';

// Sanitize HTML to prevent XSS attacks
export function sanitizeHTML(text: string): string {
  return DOMPurify.sanitize(text);
}

// Optional: Additional sanitization methods
export function sanitizeText(text: string): string {
  return text
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}