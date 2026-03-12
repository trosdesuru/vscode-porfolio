'use client';

import { VscGithub, VscMail, VscLinkExternal } from 'react-icons/vsc';
import Link from 'next/link';

import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.headerText}>
              <h1 className={styles.name}>Eduard Hernández</h1>
              <p className={styles.role}>Product Designer & UX Engineer</p>
              <div className={styles.location}>
                <span className={styles.dot} />Barcelona, España
              </div>
            </div>
          </div>

          <div className={styles.headerActions}>
            <a
              href="https://github.com/trosdesuru"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconButton}
            >
              <VscGithub size={20} />
            </a>
            <Link href="/contact" className={styles.iconButton}>
              <VscMail size={20} />
            </Link>
          </div>
        </header>

        <div className={styles.content}>
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>01</span>
              <h2 className={styles.sectionTitle}>Acerca de mí</h2>
            </div>

            <div className={styles.sectionBody}>
              <p className={styles.paragraph}>
                Perfil híbrido: Combino una fuerte orientación a negocio y análisis de datos con una sólida base técnica en Ingeniería de Software.
              </p>

              <p className={styles.paragraph}>
                Aunque mi especialidad es el Product Design y el desarrollo Frontend, disfruto trabajando de extremo a extremo con tecnologías Full-Stack para conceptualizar, diseñar y dar vida a productos digitales completos, escalables y orientados a la conversión.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>02</span>
              <h2 className={styles.sectionTitle}>Experiencia</h2>
            </div>

            <div className={styles.sectionBody}>
              <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>Marzo 2025 - Actualmente</span>
                </div>
                <h3 className={styles.expRole}>Product Designer & UX Engineer</h3>
                <p className={styles.expCompany}>Ticketeame</p>
                <ul className={styles.expList}>
                  <li>Liderazgo de Producto: Dirijo la estrategia de diseño UX/UI trabajando codo a codo con el equipo de desarrollo para asegurar una ejecución técnica impecable.</li>
                  <li>Diseño B2B2C: Construyo y escalo una plataforma transaccional optimizada tanto para la gestión de clientes (B2B) como para la experiencia del usuario final (B2C).</li>
                  <li>Innovación Funcional: Diseño e implemento herramientas avanzadas, incluyendo funcionalidades colaborativas de revisión y edición de vídeo.</li>
                  <li>Sistemas de Diseño: Desarrollo y mantengo de forma activa la librería de componentes internos, la iconografía y la arquitectura web del producto.</li>
                </ul>
              </div>

              <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>2019 - 2023</span>
                </div>
                <h3 className={styles.expRole}>Web Designer, Web Developer</h3>
                <p className={styles.expCompany}>Freelance</p>
                <ul className={styles.expList}>
                  <li className={styles.expDesc}>
                    Diseño y desarrollo de sitios web a medida, uniendo usabilidad, rendimiento y código limpio.
                  </li>
                  <li className={styles.expDesc}>
                    Creación de contenido técnico especializado sobre diseño de producto y desarrollo para plataformas referentes del sector
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>03</span>
              <h2 className={styles.sectionTitle}>Skills</h2>
            </div>

            <div className={styles.sectionBody}>
              <div className={styles.skillsGrid}>
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>FIGMA</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>Auto-Layout</span>
                    <span className={styles.skillTag}>Prototyping</span>
                    <span className={styles.skillTag}>Wireframing</span>
                    <span className={styles.skillTag}>Design System</span>
                  </div>
                </div>

                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Frontend</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>React</span>
                    <span className={styles.skillTag}>Next.js</span>
                    <span className={styles.skillTag}>Tailwind CSS</span>
                  </div>
                </div>

                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Backend</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>Node.js</span>
                    <span className={styles.skillTag}>Express</span>
                    <span className={styles.skillTag}>MongoDB</span>
                  </div>
                </div>

                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Tools</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>Git</span>
                    <span className={styles.skillTag}>VS Code</span>
                    <span className={styles.skillTag}>Figma</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>04</span>
              <h2 className={styles.sectionTitle}>Un poco más</h2>
            </div>

            <div className={styles.sectionBody}>
              <p className={styles.paragraph}>
                A parte del diseño y del desarrollo de producto, me gusta descubrir paraísos naturales, escuchar algo de buena música y disfrutar de un buen aperitivo al solete en buena compañía.
              </p>
            </div>
          </section>
        </div>

        <footer className={styles.footer}>
          <Link href="/projects" className={styles.footerLink}>
            Ver mis proyectos →
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default AboutPage;
