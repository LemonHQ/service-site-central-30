import { useEffect } from 'react';

interface JsonLdProps {
  data: Record<string, any>;
  id: string;
}

/**
 * Injects a JSON-LD <script> into <head> and removes it on unmount.
 * `id` must be unique per schema instance on a given page.
 */
const JsonLd: React.FC<JsonLdProps> = ({ data, id }) => {
  useEffect(() => {
    const attr = `data-jsonld-${id}`;
    let el = document.head.querySelector<HTMLScriptElement>(`script[${attr}]`);
    if (!el) {
      el = document.createElement('script');
      el.type = 'application/ld+json';
      el.setAttribute(attr, 'true');
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(data);
    return () => {
      el?.remove();
    };
  }, [data, id]);
  return null;
};

export default JsonLd;
