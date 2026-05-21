import { CalendarCheck, Mail, Phone, Sparkles } from 'lucide-react';
import { contact } from '../../data/siteContent';
import { LeadForm } from '../form/LeadForm';
import { Reveal } from '../ui/Reveal';

export function ContactSection() {
  return (
    <Reveal className="contact-section" id="kontakt" animationType="fade-in" duration={1400}>
      <div className="contact-section__inner">
        <Reveal
          as="aside"
          className="contact-panel"
          id="contact-panel-aside"
          animationType="fade-in-up"
          delay={100}
          duration={1300}
          aria-labelledby="contact-heading"
        >
          <p className="eyebrow">Wycena</p>
          <h2 id="contact-heading">Sprawdź dostępność terminu i orientacyjny koszt stoiska.</h2>
          <p>
            Podaj kilka informacji o wydarzeniu. Wrócimy z dostępnością, rekomendowanym pakietem i konkretnym
            zakresem obsługi.
          </p>

          <div className="contact-panel__checks" aria-label="Co dostaniesz po wysłaniu zapytania">
            <span>
              <CalendarCheck aria-hidden="true" size={18} />
              Termin i skala
            </span>
            <span>
              <Sparkles aria-hidden="true" size={18} />
              Pakiet i dodatki
            </span>
          </div>

          <div className="direct-contact" aria-label="Kontakt bezpośredni">
            <a className="direct-contact__item" href={contact.phoneHref}>
              <Phone aria-hidden="true" size={18} />
              <span>
                <small>Telefon bezpośredni</small>
                <strong>{contact.phone}</strong>
              </span>
            </a>
            <a className="direct-contact__item" href={contact.emailHref}>
              <Mail aria-hidden="true" size={18} />
              <span>
                <small>Email</small>
                <strong>{contact.email}</strong>
              </span>
            </a>
          </div>
        </Reveal>
        <Reveal
          as="div"
          className="contact-form-wrapper contact-form-wrapper--motion"
          animationType="fade-in-up"
          delay={250}
          duration={1300}
        >
          <LeadForm />
        </Reveal>
      </div>
    </Reveal>
  );
}
