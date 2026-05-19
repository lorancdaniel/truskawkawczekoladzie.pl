import { contact, navItems } from '../../data/siteContent';

const scopeLinks = [
  { href: '#oferta', label: 'Stoisko deserowe' },
  { href: '#pakiety', label: 'Pakiety od 10 zł' },
  { href: '#eventy', label: 'Eventy do 1000 gości' },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <section className="site-footer__intro" aria-label="Strawberry Group">
          <div className="site-footer__brand">
            <img src="/brand/strawberry-group-logo.svg" alt="" />
            <div>
              <p className="footer-brand">Strawberry Group S.C.</p>
              <p>Świeżość. Jakość. Doświadczenie.</p>
            </div>
          </div>
          <p className="site-footer__copy">
            Mobilne stoisko deserowe z truskawkami w czekoladzie. Przyjeżdżamy z procesem, obsługą i oprawą gotową
            na wesela, eventy firmowe, gale i strefy VIP.
          </p>
        </section>

        <div className="site-footer__columns">
          <section className="site-footer__section">
            <h2>Szybki kontakt</h2>
            <address className="site-footer__contact">
              <div>
                <span>Telefon</span>
                <a href={contact.phoneHref}>{contact.phone}</a>
              </div>
              <div>
                <span>E-mail</span>
                <a href={contact.emailHref}>{contact.email}</a>
              </div>
              <div>
                <span>Obsługa</span>
                <p>Wyceny i dostępność terminów</p>
              </div>
            </address>
          </section>

          <section className="site-footer__section">
            <h2>Menu</h2>
            <nav aria-label="Nawigacja w stopce">
              {navItems.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>
          </section>

          <section className="site-footer__section">
            <h2>Zakres</h2>
            <nav aria-label="Zakres oferty w stopce">
              {scopeLinks.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>
          </section>
        </div>
      </div>
      <div className="site-footer__bottom">
        <span>© 2026 Strawberry Group S.C.</span>
      </div>
    </footer>
  );
}
