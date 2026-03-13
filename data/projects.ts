import { BiBorderAll } from "react-icons/bi";
import { MdRoundedCorner } from "react-icons/md";

export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: 'Case Study | Ticketeame',
    description: 'Liderazgo de diseño y estrategia UX/UI para una plataforma transaccional B2B2C escalable.',
    logo: '/logos/ticketeame.svg',
    link: 'https://www.figma.com/proto/t4ySjWQYuC7TMqxS4nztx1/Ticketeame?page-id=1822%3A11699&node-id=6679-341&p=f&viewport=-84%2C543%2C0.14&t=QpnxX15XfUxj7xpu-1&scaling=contain&content-scaling=fixed&starting-point-node-id=6679%3A341',
    slug: 'Ticketeame',
  },
  {
    title: 'VSCode Portfolio',
    description: 'Portfolio interactivo desarrollado con Next.js que simula el entorno de VS Code, destacando mi perfil técnico.',
    logo: '/logos/vsc.svg',
    link: 'https://github.com/trosdesuru/vscode-porfolio',
    slug: 'vscode-portfolio',
  },
  {
    title: 'SaaS Logístico | Valerdat',
    description: 'Diseño de dashboards analíticos e interfaces para la gestión de datos complejos en un entorno SaaS B2B.',
    logo: '/logos/valerdat.png',
    link: '#',
    slug: 'valerdat',
  },
  {
    title: 'Al Borde del Burnout',
    description: '',
    logo: '/logos/icon-burnout.png',
    link: '#',
    slug: 'albordedelburnout',
  },
  {
    title: 'Cities App',
    description: 'App móvil nacida de una necesidad real: descubrir lugares auténticos. Diseño UX/UI centrado en conectar a viajeros con las experiencias de la gente local, lejos de las rutas turísticas convencionales.',
    logo: '/logos/cities.png',
    link: 'https://www.behance.net/gallery/159297987/cities-UX-UI',
    slug: 'coolify-vscode-extension',
  },
];
