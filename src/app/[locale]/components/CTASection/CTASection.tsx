"use client";

import { Link } from '@/i18n/navigation';
import { useCTAAnimation } from "./useCTAAnimation";
import styles from "./CTASection.module.css";
import { useTranslations } from 'next-intl';

export default function CTASection() {
  const { ctaRef } = useCTAAnimation();
  const t = useTranslations("CTA");

  return (
    <div className={`ctaSection ${styles.ctaSection}`} ref={ctaRef}>
      <h2>{t("title")}</h2>
      <p>{t("subtitle")}</p>
      <Link href="/contact" className="button-link">
        {t("button")}
      </Link>
    </div>
  );
}