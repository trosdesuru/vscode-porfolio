'use client'

import { track } from '@vercel/analytics';
import posthog from 'posthog-js';
import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  { social: 'email', link: 'eduardhernandezventos@gmail.com', href: 'mailto:eduardhernandezventos@gmail.com' },
  { social: 'linkedin', link: 'eduard-hernandez-ventos', href: 'https://www.linkedin.com/in/eduard-hernandez-ventos' },
  { social: 'whatsapp', link: 'hablamos-por-whatsapp', href: 'https://wa.me/34683584981?text=Muy%20buenas%2C%20Edu%2C%20%C2%BFhablamos%20de%20tu%20perfil%3F' },
  // { social: 'website', link: 'eduardhernandez.vercel.app', href: 'https://eduardhernandez.vercel.app/' },
  // { social: 'github', link: 'trosdesuru', href: 'https://github.com/trosdesuru' },
  // { social: 'portfolio', link: 'behance.net/eduardhernnd', href: 'https://www.behance.net/eduardhernnd' },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p
          className={styles.line}
          key={index}
        >
          &nbsp;&nbsp;&nbsp;{item.social} : {' '}

          <a href={item.href} target="_blank" rel="noopener"
            style={item.social === 'whatsapp' ? { color: '#25D366', fontWeight: '500' } : {}}
            onClick={() => {
              track('Contact Link Clicked', { method: item.social });
              posthog.capture('contact_method_clicked', { method: item.social });
            }}
          >
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
