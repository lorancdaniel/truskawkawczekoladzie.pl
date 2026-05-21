import type { DesiredPackage } from '../types/lead';

function prefersReducedMotion(): boolean {
  return typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function getScrollOffset(): number {
  const header = document.querySelector<HTMLElement>('.site-header');
  const headerHeight = header?.getBoundingClientRect().height ?? 88;
  const headerPosition = header ? window.getComputedStyle(header).position : 'static';
  if (headerPosition === 'fixed' || headerPosition === 'sticky') {
    return Math.ceil(headerHeight + 24);
  }
  return 24;
}

export function scrollToElement(target: HTMLElement, behavior?: ScrollBehavior): void {
  const top = target.getBoundingClientRect().top + window.scrollY - getScrollOffset();
  window.scrollTo({
    top: Math.max(0, top),
    behavior: behavior ?? (prefersReducedMotion() ? 'auto' : 'smooth'),
  });
}

export function scrollToLeadForm(packageId?: DesiredPackage): void {
  const form = document.getElementById('kontakt');
  if (!form) return;
  if (packageId) {
    form.dispatchEvent(new CustomEvent('package-request', { detail: packageId }));
  }
  scrollToElement(form);
}
