'use client';

import Link from 'next/link';
import { VscArrowRight, VscGithub, VscMail, VscCode } from 'react-icons/vsc';
import posthog from 'posthog-js';

import styles from '@/styles/HomePage.module.css';

export default function HomePage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.icon}>
              <VscCode size={32} />
            </div>
          </div>

          <div className={styles.intro}>
            <p className={styles.greeting}>Hola, soy</p>

            <h1 className={styles.name}>Eduard Hernández</h1>

            <p className={styles.role}>Product Designer | UX/UI Specialist | UX Engineer</p>

            <div className={styles.divider} />

            <p className={styles.description}>
              Product Designer híbrido especializado en SaaS B2B. Transformo datos e Ingeniería de Software en interfaces de alto tráfico que impulsan la conversión mediante sistemas de diseño escalables y visión de producto.
            </p>
          </div>

          <div className={styles.actions}>
            <Link href="/projects" className={styles.primaryAction} onClick={() => posthog.capture('home_cta_clicked', { cta: 'ver_proyectos' })}>
              <span>Ver Proyectos</span>
              <VscArrowRight size={18} />
            </Link>

            <Link href="/about" className={styles.secondaryAction} onClick={() => posthog.capture('home_secondary_cta_clicked', { cta: 'ver_mas' })}>
              <span>Ver más</span>
            </Link>
          </div>

          <div className={styles.links}>
            <a
              href="https://github.com/trosdesuru"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              onClick={() => posthog.capture('home_social_link_clicked', { link: 'github' })}
            >
              <VscGithub size={16} />
              <span>GitHub</span>
            </a>

            <span className={styles.linkSeparator}>/</span>

            <Link href="/contact" className={styles.link} onClick={() => posthog.capture('home_social_link_clicked', { link: 'contacto' })}>
              <VscMail size={16} />
              <span>Contacto</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
