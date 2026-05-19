import type { DesiredPackage } from '../types/lead';

function prefersReducedMotion(): boolean {
  return typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function getScrollOffset(): number {
  const header = document.querySelector<HTMLElement>('.site-header');
  const headerHeight = header?.getBoundingClientRect().height ?? 88;
  return Math.max(112, Math.ceil(headerHeight + 32));
}

export function scrollToElement(target: HTMLElement): void {
  const top = target.getBoundingClientRect().top + window.scrollY - getScrollOffset();
  window.scrollTo({
    top: Math.max(0, top),
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
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
