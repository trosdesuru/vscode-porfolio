# VSCode Portfolio | UX Engineer Edition

Un portfolio de desarrollador con la estética de Visual Studio Code, construido con Next.js y optimizado para una experiencia de usuario técnica y fluida.

Este proyecto refleja mi perfil híbrido, combinando el diseño de interfaces complejas con una arquitectura frontend robusta.

![vscode-portfolio banner]()

## Features Roadmap

- [ ] Terminal Interactiva: Una consola funcional para navegar por el portfolio mediante comandos.
  - [x] GitHub Dark (default)
  - [ ] Dracula, Ayu & Nord.
  - [x] One Dark Pro (En desarrollo).
- [x] Integración con Dev.to: Consumo de artículos técnicos de forma dinámica mediante API.
- [ ] Customizations: Capacidad de extender el entorno con nuevos "plugins" visuales.

Dame tu feedback, si tienes sugerencias o mejoras, abre un `issue` por favor, ¡gracias!

## Stack Tecnológico

- Framework: Next.js (React).
- Lenguajes: TypeScript & JavaScript.
- Estilos: CSS Modules / Tailwind CSS.
- Despliegue: Vercel.

## Configuración del Entorno

Para sincronizar tus artículos de Dev.to, crea un archivo `.env.local` en el directorio raíz. Puedes guiarte por el archivo `.env.local.example`.

## Running Development Server

```bash
npm run dev
# or
yarn dev
```

Abre [http://localhost:3000](http://localhost:3000) para ver el resultado en tiempo real.

All VSCode related components can be found in the `components` folder. To change the content of the portfolio, check out the `pages` folder. To add or remove pages, modify `components/Sidebar.jsx` and `components/Tabsbar.jsx`.

## Arquitectura del Proyecto

Como Product Designer, he estructurado el código para facilitar su escalabilidad:
- `/components`: Contiene la lógica atómica de la interfaz de VSCode (Sidebar, Tabsbar, Footer).
- `/pages`: Define la estructura de navegación y el contenido del portfolio.
- Personalización: Para añadir o quitar secciones, modifica la configuración en `components/Sidebar.jsx` y `components/Tabsbar.jsx`.

## Next.js Resources

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/)

## Despliegue

Este proyecto está optimizado para la Vercel Platform. La integración continua asegura que cada cambio en el código se refleje inmediatamente en tu dominio personal.

Revisa [Next.js deployment documentation](https://nextjs.org/docs/deployment) para más detalles.
