export const scrollState = {
  scrollTop: 0,
  limit: 0,
  progress: 0,
  velocity: 0,
  direction: 0,
  viewportHeight: 0,
};

export function updateScroll(lenisInstance) {
  if (!lenisInstance) return;
  scrollState.scrollTop = lenisInstance.scroll ?? 0;
  scrollState.limit = lenisInstance.limit ?? 0;
  scrollState.progress = lenisInstance.progress ?? 0;
  scrollState.velocity = lenisInstance.velocity ?? 0;
  scrollState.direction = lenisInstance.direction ?? 0;
  scrollState.viewportHeight = typeof window !== "undefined" ? window.innerHeight : 0;
}

export function getScroll() {
  return scrollState;
}
