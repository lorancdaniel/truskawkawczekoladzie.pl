import { galleryItems } from '../../data/siteContent';
import { Reveal } from '../ui/Reveal';

export function Gallery() {
  return (
    <Reveal className="gallery-section" animationType="fade-in" duration={1400}>
      <div className="gallery-atelier">
        <div className="gallery-atelier__intro">
          <p className="eyebrow">Styl stoiska</p>
          <Reveal as="div" animationType="fade-in-up" delay={100} duration={1200}>
            <h2>Wizualny dowód bez udawania realizacji.</h2>
          </Reveal>
          <Reveal as="div" animationType="fade-in-up" delay={200} duration={1200}>
            <p className="gallery-atelier__lead">
              Do czasu dodania prawdziwych zdjęć eventowych pokazujemy styl, składniki i typ doświadczenia.
            </p>
          </Reveal>
          <div className="gallery-atelier__list" aria-label="Wyróżniki stylu stoiska">
            {galleryItems.map((item, index) => (
              <Reveal
                as="article"
                className="gallery-atelier__item"
                key={item.title}
                animationType="reveal-3d"
                delay={200 + index * 120}
                duration={1300}
              >
                <span className="gallery-atelier__number" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="gallery-atelier__content">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal
          as="div"
          className="gallery-atelier__visual"
          animationType="scale-up"
          delay={400}
          duration={1500}
        >
          <figure className="gallery-atelier__frame">
            <img
              src="/images/hero-strawberry-stand.png"
              alt="Eleganckie kubki z truskawkami i czekoladą na stoisku eventowym"
              loading="lazy"
            />
            <div className="gallery-atelier__badge" aria-hidden="true">
              <span className="gallery-atelier__badge-tag">FLAVOR STUDIO</span>
              <span className="gallery-atelier__badge-desc">Estetyka & Standard</span>
            </div>
          </figure>
        </Reveal>
      </div>
    </Reveal>
  );
}
