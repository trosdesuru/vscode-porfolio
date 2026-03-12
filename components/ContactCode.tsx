import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  { social: 'website', link: 'eduardhernandez.vercel.app', href: 'https://eduardhernandez.vercel.app/' },
  { social: 'email', link: 'eduardhernandezventos@gmail.com', href: 'mailto:eduardhernandezventos@gmail.com' },
  { social: 'github', link: 'trosdesuru', href: 'https://github.com/trosdesuru' },
  { social: 'linkedin', link: 'eduard-hernandez-ventos', href: 'https://www.linkedin.com/in/eduard-hernandez-ventos' },
  { social: 'portfolio', link: 'behance.net/eduardhernnd', href: 'https://www.behance.net/eduardhernnd' },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
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
