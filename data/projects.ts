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
    description:
      'Discover creative websites and developers. A portal for you to share your projects.',
    logo: '/logos/driwwwle.svg',
    link: 'https://www.figma.com/proto/t4ySjWQYuC7TMqxS4nztx1/Ticketeame?page-id=1822%3A11699&node-id=6679-341&p=f&viewport=-84%2C543%2C0.14&t=QpnxX15XfUxj7xpu-1&scaling=contain&content-scaling=fixed&starting-point-node-id=6679%3A341',
    slug: 'driwwwle',
  },
  {
    title: 'VSCode Portfolio',
    description:
      'A Visual Studio Code themed developer portfolio built with Next.js and CSS Modules.',
    logo: '/logos/vsc.svg',
    link: 'https://github.com/itsnitinr/vscode-portfolio',
    slug: 'vscode-portfolio',
  },
  {
    title: 'Subtrackt',
    description:
      'A simple and elegant way to track your subscriptions and save money.',
    logo: '/logos/subtrackt.svg',
    link: 'https://github.com/itsnitinr/subtrackt',
    slug: 'subtrackt',
  },
  {
    title: 'Coolify Deployments',
    description:
      'VSCode extension to track and deploy your Coolify applications.',
    logo: '/logos/coolify.svg',
    link: 'https://github.com/itsnitinr/coolify-vscode-extension',
    slug: 'coolify-vscode-extension',
  },
];
