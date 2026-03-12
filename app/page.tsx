'use client';

import Link from 'next/link';
import { VscArrowRight, VscGithub, VscMail, VscCode } from 'react-icons/vsc';

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

            <p className={styles.role}>UX/UI Designer | Product Designer | UX Engineer | </p>

            <div className={styles.divider} />

            <p className={styles.description}>
              Product Designer con experiencia liderando la estrategia de diseño y la experiencia de usuario en entornos SaaS B2B y plataformas transaccionales de alto tráfico.Mi perfil es híbrido:  combino una fuerte orientación a negocio y análisis de datos con una sólida base técnica en Ingeniería de Software. Me permite diseñar interfaces visualmente atractivas, definir roadmaps de producto, crear Sistemas de Diseño escalables y alinear cada decisión con las métricas clave de conversión.
            </p>
          </div>

          <div className={styles.actions}>
            <Link href="/projects" className={styles.primaryAction}>
              <span>Ver Proyectos</span>
              <VscArrowRight size={18} />
            </Link>

            <Link href="/about" className={styles.secondaryAction}>
              <span>Ver más</span>
            </Link>
          </div>

          <div className={styles.links}>
            <a
              href="https://github.com/trosdesuru"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <VscGithub size={16} />
              <span>GitHub</span>
            </a>

            <span className={styles.linkSeparator}>/</span>

            <Link href="/contact" className={styles.link}>
              <VscMail size={16} />
              <span>Contacto</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
