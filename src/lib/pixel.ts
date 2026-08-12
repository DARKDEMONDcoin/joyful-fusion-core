/**
 * Meta Pixel helper — thin wrapper around the fbq global injected in index.html.
 * Fires the Purchase event when a payment/subscription is confirmed.
 */

const PIXEL_ID = "1188362353239948";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/** Fire a custom/standard Meta Pixel event. Safe no-op if fbq is missing. */
export function trackEvent(event: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  window.fbq("track", event, params ?? {});
}

/**
 * Fire the Meta Pixel Purchase event. Call this once when the user's
 * payment/subscription is confirmed (i.e. access flips to granted).
 */
export function trackPurchase(value: number, currency = "EGP") {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  window.fbq("track", "Purchase", {
    value,
    currency,
    content_ids: ["course_lifetime"],
    content_type: "product",
  });
}

export { PIXEL_ID };
