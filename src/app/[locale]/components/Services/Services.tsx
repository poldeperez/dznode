import { useServicesAnimation } from './useServicesAnimations';
import styles from './Services.module.css';
import { Card, CardProps } from "./ServiceCard";
import { useTranslations } from 'next-intl';



export default function Services() {
  const containerRef = useServicesAnimation();
  const t = useTranslations("services");
  const cards = t.raw("cards");

    return (
      <section className={`services-section ${styles.servicesSection}`} ref={containerRef}>
      <div className={`services-intro ${styles.servicesIntro}`}>
        <h2>{t("title")}</h2>
      </div>

        {cards.map((card: CardProps, index: number) => (
          <Card key={index} {...card} index={index} />
        ))}

      <div className={`services-outro ${styles.servicesOutro}`}></div>
    </section>
  );
}