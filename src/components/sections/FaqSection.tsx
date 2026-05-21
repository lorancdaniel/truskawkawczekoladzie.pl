import { useId, useState } from 'react';
import { faqItems } from '../../data/seo';
import { Reveal } from '../ui/Reveal';

type FaqManifestRowProps = {
  index: number;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
};

function FaqManifestRow({ index, question, answer, isOpen, onToggle }: FaqManifestRowProps) {
  const panelId = useId();
  const indexLabel = String(index + 1).padStart(2, '0');

  return (
    <article className={`faq-row${isOpen ? ' is-open' : ''}`}>
      <h3 className="faq-row__heading">
        <button
          type="button"
          className="faq-row__trigger"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span className="faq-row__index" aria-hidden="true">
            {indexLabel}
          </span>
          <strong className="faq-row__question">{question}</strong>
          <span className="faq-row__toggle" aria-hidden="true">
            +
          </span>
        </button>
      </h3>
      <div id={panelId} className="faq-row__panel" aria-hidden={!isOpen}>
        <div className="faq-row__panel-inner">
          <p className="faq-row__answer">{answer}</p>
        </div>
      </div>
    </article>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggleRow(index: number) {
    setOpenIndex((current) => (current === index ? null : index));
  }

  return (
    <Reveal
      className="faq-section faq-section--motion"
      id="faq"
      animationType="fade-in-up"
      duration={1200}
    >
      <div className="faq-layout">
        <div className="faq-rail">
          <p className="eyebrow">FAQ</p>
          <h2 className="faq-rail__title">Pytania przed wyceną stoiska.</h2>
          <p className="faq-rail__lead">
            Zanim przejdziesz do formularza — najczęstsze wątpliwości o pakiety, skalę i logistykę w jednym
            miejscu.
          </p>
        </div>

        <div className="faq-manifest">
          {faqItems.map((item, index) => (
            <FaqManifestRow
              key={item.question}
              index={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => toggleRow(index)}
            />
          ))}
        </div>
      </div>
    </Reveal>
  );
}
