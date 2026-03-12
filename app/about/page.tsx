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
                Product Designer & UX Engineer | Frontend Developer
              </p>

              <p className={styles.paragraph}>
                Especializado en liderar estrategias de diseño y experiencia de usuario en entornos de alto tráfico. Mi perfil combina una sólida base técnica en Ingeniería de Software con una fuerte orientación a negocio y análisis de datos. Diseño interfaces atractivas, defino roadmaps de producto y construyo sistemas de diseño escalables alineados con métricas de conversión.
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
                  <span className={styles.expPeriod}>Ene 2023 – Jun 2023</span>
                </div>
                <h3 className={styles.expRole}>UX/UI Designer & Product Designer</h3>
                <p className={styles.expCompany}>Valerdat</p>
                <ul className={styles.expList}>
                  <li className={styles.expDesc}>
                    Optimización de Producto: Lideré el rediseño integral del dashboard principal para clientes, transformando datos complejos en interfaces visuales claras, intuitivas y accionables.
                  </li>
                  <li className={styles.expDesc}>
                    Mejora de la Experiencia (UX): Simplificación de los flujos de navegación y reestructuración de la arquitectura de la información para reducir la fricción y agilizar la toma de decisiones del usuario.
                  </li>
                  <li className={styles.expDesc}>
                    Alineación Técnica: Creación de componentes UI escalables, trabajando en estrecha colaboración con el equipo de desarrollo para asegurar una implementación ágil y precisa.
                  </li>
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
                  <h4 className={styles.skillTitle}>UX/UI & Product Design</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>Auto-Layout</span>
                    <span className={styles.skillTag}>Prototyping</span>
                    <span className={styles.skillTag}>Wireframing</span>
                    <span className={styles.skillTag}>Design System</span>
                    <span className={styles.skillTag}>UX Research</span>
                  </div>
                </div>

                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Frontend</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>React</span>
                    <span className={styles.skillTag}>Next.js</span>
                    <span className={styles.skillTag}>Tailwind CSS</span>
                    <span className={styles.skillTag}>HTML/CSS</span>
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
              <h2 className={styles.sectionTitle}>Formación</h2>
            </div>

            <div className={styles.sectionBody}>
              <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>Oct 2023 - Dic 2025</span>
                </div>
                <h3 className={styles.expRole}>Software Engineering (Common Core)</h3>
                <p className={styles.expCompany}>42 Barcelona</p>
                <ul className={styles.expList}>
                  <li>Formación intensiva en programación y desarrollo de software basada en proyectos.</li>
                  <li>Enfoque en algoritmos, gestión de memoria y arquitectura de sistemas, proporcionando la base técnica para roles de UX Engineer o Software Engineer.</li>
                </ul>
              </div>

              <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>May 2023 - Oct 2023</span>
                </div>
                <h3 className={styles.expRole}>Full-Stack | Web Developer</h3>
                <p className={styles.expCompany}>ISDI Coders</p>
                <ul className={styles.expList}>
                  <li className={styles.expDesc}>
                    Especialización en el desarrollo de aplicaciones web de extremo a extremo (Full-Stack).
                  </li>
                  <li className={styles.expDesc}>
                    Foco en tecnologías modernas para la creación de productos digitales escalables y funcionales.
                  </li>
                </ul>
              </div>

              <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>Sept 2022 - Dic 2022</span>
                </div>
                <h3 className={styles.expRole}>Bootcamp en UX/UI Design</h3>
                <p className={styles.expCompany}>Upgrade Hub</p>
                <ul className={styles.expList}>
                  <li className={styles.expDesc}>
                    Especialización práctica en diseño de experiencia de usuario (UX) e interfaz (UI).
                  </li>
                  <li className={styles.expDesc}>
                    Perfeccionamiento de metodologías de investigación, prototipado y validación de productos.
                  </li>
                </ul>
              </div>

              <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>2014 - 2018</span>
                </div>
                <h3 className={styles.expRole}>Grado en Diseño Digital y Creación Multimedia</h3>
                <p className={styles.expCompany}>Universitat Oberta de Catalunya (UOC)</p>
                <ul className={styles.expList}>
                  <li className={styles.expDesc}>
                    Formación superior centrada en la interacción digital, multimedia y diseño gráfico.
                  </li>
                  <li className={styles.expDesc}>
                    Base académica que sustenta mi capacidad para crear interfaces visualmente coherentes y centradas en el usuario.
                  </li>
                </ul>
              </div>

            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>05</span>
              <h2 className={styles.sectionTitle}>Un poco más de mí</h2>
            </div>

            <div className={styles.sectionBody}>
              <p className={styles.paragraph}>
                Aparte del diseño de producto y el código, me encontrarás descubriendo paraísos naturales, escuchando buena música o disfrutando de un aperitivo al solete en buena compañía por Barcelona.
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
