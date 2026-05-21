import { type CSSProperties, useCallback, useEffect, useRef, useState } from 'react';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { contact, navItems } from '../../data/siteContent';
import { scrollToLeadForm } from '../../lib/dom';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [floatingVisible, setFloatingVisible] = useState(false);
  const [floatingSettled, setFloatingSettled] = useState(false);
  const [floatingDocking, setFloatingDocking] = useState(false);
  const [floatingSafeHidden, setFloatingSafeHidden] = useState(false);
  const headerCtaDetached = scrolled || floatingVisible || floatingDocking;
  const scrolledRef = useRef(false);
  const floatingSafeHiddenRef = useRef(false);
  const headerCommandRef = useRef<HTMLDivElement | null>(null);
  const floatingActionsRef = useRef<HTMLDivElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const lastNavFocusRef = useRef<HTMLElement | null>(null);
  const floatingFrameRef = useRef<number | null>(null);
  const floatingSecondFrameRef = useRef<number | null>(null);
  const handleLeadFormClick = () => {
    setIsOpen(false);
    scrollToLeadForm();
  };

  const closeNavAndFocusTarget = (href: string) => {
    setIsOpen(false);
    window.setTimeout(() => {
      const id = href.startsWith('#') ? href.slice(1) : '';
      const target = id ? document.getElementById(id) : null;

      if (target) {
        if (!target.hasAttribute('tabindex')) {
          target.setAttribute('tabindex', '-1');
        }
        target.focus({ preventScroll: true });
        return;
      }

      menuButtonRef.current?.focus({ preventScroll: true });
    }, 0);
  };

  const clearFloatingMotion = useCallback(() => {
    if (floatingFrameRef.current !== null) {
      window.cancelAnimationFrame(floatingFrameRef.current);
      floatingFrameRef.current = null;
    }

    if (floatingSecondFrameRef.current !== null) {
      window.cancelAnimationFrame(floatingSecondFrameRef.current);
      floatingSecondFrameRef.current = null;
    }
  }, []);

  const updateFloatingOrigin = useCallback((mode: 'launch' | 'dock' = 'launch') => {
    const floatingActions = floatingActionsRef.current;
    if (!floatingActions) {
      return;
    }

    const floatingStyles = window.getComputedStyle(floatingActions);
    const floatingPaddingLeft = Number.parseFloat(floatingStyles.paddingLeft) || 0;
    const floatingPaddingRight = Number.parseFloat(floatingStyles.paddingRight) || 0;
    const floatingBorderLeft = Number.parseFloat(floatingStyles.borderLeftWidth) || 0;
    const floatingBorderRight = Number.parseFloat(floatingStyles.borderRightWidth) || 0;
    const sourceRect = headerCommandRef.current?.getBoundingClientRect();
    const sourcePhoneRect = headerCommandRef.current?.querySelector('.header-phone')?.getBoundingClientRect();
    const sourceCtaRect = headerCommandRef.current?.querySelector('.nav-cta')?.getBoundingClientRect();
    const sourceGap =
      sourcePhoneRect && sourceCtaRect ? Math.max(0, sourceCtaRect.left - sourcePhoneRect.right) : undefined;
    const dockedFloatingWidth =
      sourcePhoneRect && sourceCtaRect
        ? sourceCtaRect.right -
          sourcePhoneRect.left +
          floatingPaddingLeft +
          floatingPaddingRight +
          floatingBorderLeft +
          floatingBorderRight
        : undefined;
    const floatingWidth = mode === 'dock' && dockedFloatingWidth ? dockedFloatingWidth : floatingActions.offsetWidth;
    const floatingHeight = floatingActions.offsetHeight;
    const targetRight = Number.parseFloat(floatingStyles.right) || 0;
    const targetBottom = Number.parseFloat(floatingStyles.bottom) || 0;
    const targetLeft = window.innerWidth - targetRight - floatingWidth;
    const targetTop = window.innerHeight - targetBottom - floatingHeight;
    const headerRect = document.querySelector('.site-header')?.getBoundingClientRect();
    const sourceRight =
      mode === 'dock' && sourceCtaRect
        ? sourceCtaRect.right + floatingPaddingRight
        : sourceCtaRect?.right ?? sourceRect?.right ?? window.innerWidth - 18;
    const sourceTopRaw =
      sourceCtaRect?.top !== undefined
        ? sourceCtaRect.top + (sourceCtaRect.height - floatingHeight) / 2
        : sourceRect?.top !== undefined
          ? sourceRect.top + (sourceRect.height - floatingHeight) / 2
        : (headerRect?.top ?? 0) + ((headerRect?.height ?? 80) - floatingHeight) / 2;
    const sourceTop = Math.min(Math.max(sourceTopRaw, 10), (headerRect?.height ?? 88) + 10);

    if (mode === 'dock' && sourcePhoneRect && sourceCtaRect && sourceGap !== undefined && dockedFloatingWidth) {
      floatingActions.style.setProperty('--floating-dock-gap', `${Math.round(sourceGap)}px`);
      floatingActions.style.setProperty('--floating-dock-phone-width', `${Math.round(sourcePhoneRect.width)}px`);
      floatingActions.style.setProperty('--floating-dock-cta-width', `${Math.round(sourceCtaRect.width)}px`);
      floatingActions.style.setProperty(
        '--floating-dock-copy-width',
        `${Math.max(0, Math.round(sourcePhoneRect.width - 60))}px`,
      );
    }

    const originX =
      mode === 'dock' && sourcePhoneRect
        ? sourcePhoneRect.left + floatingPaddingLeft + floatingBorderLeft - targetLeft
        : sourceRight - floatingWidth - targetLeft;

    floatingActions.style.setProperty('--floating-origin-x', `${Math.round(originX)}px`);
    floatingActions.style.setProperty('--floating-origin-y', `${Math.round(sourceTop - targetTop)}px`);
  }, []);

  const revealFloatingActions = useCallback(() => {
    clearFloatingMotion();
    updateFloatingOrigin();
    setFloatingDocking(false);
    setFloatingVisible(true);
    setFloatingSettled(false);
    floatingFrameRef.current = window.requestAnimationFrame(() => {
      floatingFrameRef.current = null;
      floatingSecondFrameRef.current = window.requestAnimationFrame(() => {
        floatingSecondFrameRef.current = null;
        setFloatingSettled(true);
      });
    });
  }, [clearFloatingMotion, updateFloatingOrigin]);

  const returnFloatingActions = useCallback(() => {
    clearFloatingMotion();
    updateFloatingOrigin('dock');
    setFloatingDocking(true);
    setFloatingVisible(true);
    setFloatingSettled(false);
  }, [clearFloatingMotion, updateFloatingOrigin]);

  useEffect(() => {
    let initialFrame: number | null = null;
    let scrollFrame: number | null = null;

    const syncScrolledState = (nextScrolled: boolean) => {
      if (scrolledRef.current === nextScrolled) {
        return;
      }

      scrolledRef.current = nextScrolled;
      setScrolled(nextScrolled);

      if (nextScrolled) {
        revealFloatingActions();
        return;
      }

      returnFloatingActions();
    };

    const syncFloatingSafeZone = () => {
      const contactSection = document.getElementById('kontakt');
      const rect = contactSection?.getBoundingClientRect();
      const isModalOpen = typeof document !== 'undefined' && (
        document.body.classList.contains('calculator-open') ||
        document.body.classList.contains('modal-open')
      );
      const activeEl = typeof document !== 'undefined' ? document.activeElement : null;
      const isFormFocused = Boolean(activeEl && contactSection?.contains(activeEl));
      const nextSafeHidden = Boolean(
        isModalOpen ||
        isFormFocused ||
        (rect && rect.top < window.innerHeight - 80 && rect.bottom > 100)
      );

      if (floatingSafeHiddenRef.current !== nextSafeHidden) {
        floatingSafeHiddenRef.current = nextSafeHidden;
        setFloatingSafeHidden(nextSafeHidden);
      }
    };

    const syncScrollState = () => {
      scrollFrame = null;
      const scrollY = window.scrollY;
      const nextScrolled = scrolledRef.current ? scrollY > 24 : scrollY > 96;
      updateFloatingOrigin(nextScrolled ? 'launch' : 'dock');
      syncScrolledState(nextScrolled);
      syncFloatingSafeZone();
    };

    const onScroll = () => {
      if (scrollFrame !== null) {
        return;
      }

      scrollFrame = window.requestAnimationFrame(syncScrollState);
    };

    initialFrame = window.requestAnimationFrame(onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    document.addEventListener('focusin', syncFloatingSafeZone);
    document.addEventListener('focusout', syncFloatingSafeZone);

    const observer = new MutationObserver(() => {
      syncFloatingSafeZone();
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    return () => {
      if (initialFrame !== null) {
        window.cancelAnimationFrame(initialFrame);
      }
      if (scrollFrame !== null) {
        window.cancelAnimationFrame(scrollFrame);
      }
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      document.removeEventListener('focusin', syncFloatingSafeZone);
      document.removeEventListener('focusout', syncFloatingSafeZone);
      observer.disconnect();
    };
  }, [returnFloatingActions, revealFloatingActions, updateFloatingOrigin]);

  useEffect(() => {
    return clearFloatingMotion;
  }, [clearFloatingMotion]);

  useEffect(() => {
    document.body.classList.toggle('nav-open', isOpen);
    return () => document.body.classList.remove('nav-open');
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    lastNavFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;

    const focusFrame = window.requestAnimationFrame(() => {
      const firstLink = navRef.current?.querySelector<HTMLElement>('a, button');
      firstLink?.focus({ preventScroll: true });
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setIsOpen(false);
        window.requestAnimationFrame(() => {
          (lastNavFocusRef.current ?? menuButtonRef.current)?.focus({ preventScroll: true });
        });
        return;
      }

      if (event.key !== 'Tab') {
        return;
      }

      const focusable = [
        menuButtonRef.current,
        ...(navRef.current
          ? Array.from(
              navRef.current.querySelectorAll<HTMLElement>(
                'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
              ),
            )
          : []),
      ].filter((item): item is HTMLElement => {
        if (!item) return false;
        const style = window.getComputedStyle(item);
        return style.display !== 'none' && style.visibility !== 'hidden';
      });

      if (!focusable.length) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
        return;
      }

      if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`site-header ${scrolled ? 'site-header--scrolled' : ''} ${headerCtaDetached ? 'site-header--cta-detached' : ''} ${isOpen ? 'site-header--open' : ''}`}
      >
        <a className="brand" href="#top" aria-label="Strawberry Group">
          <img
            className="brand__logo"
            src="/brand/strawberry-group-generated-logo.png"
            alt=""
            width="637"
            height="918"
            decoding="async"
          />
          <span className="brand__wordmark">
            <span>Strawberry</span>
            <span>Group S.C.</span>
          </span>
        </a>

        <button
          className={`menu-button menu-button--magnetic ${isOpen ? 'is-open' : ''}`}
          type="button"
          aria-label={isOpen ? 'Zamknij menu' : 'Otwórz menu'}
          aria-expanded={isOpen}
          aria-controls="site-navigation"
          onClick={() => setIsOpen((value) => !value)}
          ref={menuButtonRef}
        >
          <span className="menu-button__magnet" aria-hidden="true">
            <span className="menu-button__glyph">
              <span className="menu-button__line menu-button__line--top" />
              <span className="menu-button__line menu-button__line--middle" />
              <span className="menu-button__line menu-button__line--bottom" />
            </span>
          </span>
          <span className="menu-button__dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>

        <nav
          id="site-navigation"
          className={`site-nav site-nav--glass ${isOpen ? 'is-open' : ''}`}
          aria-label="Główna nawigacja"
          ref={navRef}
        >
          <span className="site-nav__photo-lock" aria-hidden="true" />
          <p className="site-nav__intro">Wybierz sekcję albo od razu sprawdź dostępność terminu.</p>
          <div className="site-nav__links">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => closeNavAndFocusTarget(item.href)}
                style={{ '--nav-item-index': index } as CSSProperties}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="header-command header-command--mobile">
            <a className="header-phone" href={contact.phoneHref} onClick={() => setIsOpen(false)}>
              <span className="header-phone__label">kontakt bezpośredni</span>
              <span className="header-phone__number">{contact.phone}</span>
            </a>
            <button className="nav-cta" type="button" onClick={handleLeadFormClick}>
              Sprawdź termin
            </button>
          </div>
        </nav>

        <div className="header-command header-command--desktop" ref={headerCommandRef} aria-hidden={headerCtaDetached}>
          <a className="header-phone" href={contact.phoneHref} tabIndex={headerCtaDetached ? -1 : undefined}>
            <span className="header-phone__label">kontakt bezpośredni</span>
            <span className="header-phone__number">{contact.phone}</span>
          </a>
          <button
            className="nav-cta"
            type="button"
            onClick={handleLeadFormClick}
            tabIndex={headerCtaDetached ? -1 : undefined}
          >
            Sprawdź termin
          </button>
        </div>
      </header>

      <div
        className={`floating-actions ${floatingVisible ? 'is-visible' : ''} ${floatingSettled ? 'is-settled' : ''} ${floatingDocking ? 'is-docking' : ''} ${floatingSafeHidden ? 'is-safe-hidden' : ''}`}
        ref={floatingActionsRef}
        aria-hidden={!floatingVisible || floatingSafeHidden}
        aria-label="Szybkie akcje"
      >
        <a
          className="floating-phone"
          href={contact.phoneHref}
          aria-label={`Kontakt telefoniczny ${contact.phone}`}
          tabIndex={floatingVisible && !floatingSafeHidden ? undefined : -1}
        >
          <PhoneCall aria-hidden="true" />
          <span className="floating-phone__copy">
            <span>kontakt bezpośredni</span>
            <strong>{contact.phone}</strong>
          </span>
        </a>
        <button
          className="floating-cta"
          type="button"
          onClick={handleLeadFormClick}
          tabIndex={floatingVisible && !floatingSafeHidden ? undefined : -1}
        >
          <span>Sprawdź termin</span>
          <ArrowRight aria-hidden="true" />
        </button>
      </div>
    </>
  );
}
