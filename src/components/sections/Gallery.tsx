import { galleryItems } from '../../data/siteContent';
import { Reveal } from '../ui/Reveal';

export function Gallery() {
  return (
    <Reveal className="gallery-section">
      <div className="gallery-atelier">
        <div className="gallery-atelier__intro">
          <p className="eyebrow">Styl stoiska</p>
          <h2>Wizualny dowód bez udawania realizacji.</h2>
          <p className="gallery-atelier__lead">
            Do czasu dodania prawdziwych zdjęć eventowych pokazujemy styl, składniki i typ doświadczenia.
          </p>
          <div className="gallery-atelier__list" aria-label="Wyróżniki stylu stoiska">
            {galleryItems.map((item, index) => (
              <article className="gallery-atelier__item" key={item.title}>
                <span className="gallery-atelier__number" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="gallery-atelier__content">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="gallery-atelier__visual">
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
        </div>
      </div>
    </Reveal>
  );
}
