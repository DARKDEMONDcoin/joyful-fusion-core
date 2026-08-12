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

/** Fire PageView — used on SPA route changes (the base code fires the first one). */
export function trackPageView() {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  window.fbq("track", "PageView");
}

/** Fire InitiateCheckout when the user starts the payment flow. */
export function trackInitiateCheckout(value: number, currency = "EGP") {
  trackEvent("InitiateCheckout", {
    value,
    currency,
    content_ids: ["course_lifetime"],
    content_type: "product",
  });
}

/**
 * Fire the Meta Pixel Purchase event. Call this once when the user's
 * payment/subscription is confirmed (i.e. access flips to granted).
 * De-duplicated per browser so a reload never double-counts.
 */
export function trackPurchase(value: number, currency = "EGP") {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  try {
    if (localStorage.getItem("fb_purchase_fired") === "1") return;
    localStorage.setItem("fb_purchase_fired", "1");
  } catch {
    // storage unavailable — still fire the event
  }
  window.fbq("track", "Purchase", {
    value,
    currency,
    content_ids: ["course_lifetime"],
    content_type: "product",
  });
}

export { PIXEL_ID };
