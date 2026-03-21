"use client";

import { useState, useRef, useEffect } from "react";
import { VscTerminal, VscClose } from "react-icons/vsc";
import { track } from "@vercel/analytics";

import { THEME_KEYS } from "@/lib/themes";
import styles from "@/styles/Terminal.module.css";

interface TerminalLine {
  type: "input" | "output" | "error";
  content: string;
}

const commands: Record<string, () => string[]> = {
  help: () => [
    "Comandos disponibles:",
    "  help      - Muestra este mensaje de ayuda",
    "  about     - Acerca de mí",
    "  skills    - Mis habilidades técnicas",
    "  projects  - Ver mis proyectos",
    "  contact   - Información de contacto",
    "  theme     - Cambiar de tema (uso: theme <nombre>)",
    "  themes    - Listar los temas disponibles",
    "  clear     - Limpiar la terminal",
    "  date      - Mostrar la fecha actual",
    "  whoami    - ¿Quién soy?",
    "  ls        - Listar el contenido del directorio",
    "  pwd       - Mostrar el directorio de trabajo actual",
    "  echo      - Imprimir texto (uso: echo <texto>)",
  ],
  about: () => [
    "¡Hola, soy Eduard!",
    "Un Product Designer y UX Engineer especializado en llevar productos de 0 a 1.",
    "Me muevo entre Figma y React/TypeScript, asegurando que el diseño",
    "sea técnicamente escalable y la experiencia de usuario impecable.",
  ],
  skills: () => [
    "Stack Híbrido (Diseño + Ingeniería):",
    "  Design:     Figma, Design Systems, DesignOps, AI-Driven Design (Claude/Cursor)",
    "  Frontend:   React, Next.js, TypeScript, Tailwind CSS, HTML/CSS",
    "  Core:       C, Algoritmia, Gestión de Memoria (42 Barcelona), SOLID, TDD",
    "  Backend:    Node.js, Express, MongoDB",
  ],
  projects: () => [
    "Proyectos Destacados:",
    "  1. Ticketeame - Liderazgo de diseño y estrategia UX/UI (SaaS B2B2C)",
    "  2. VSCode Portfolio - ¡Este portfolio interactivo que estás viendo!",
    "  3. Valerdat - Diseño de dashboard analítico predictivo con IA (SaaS Logístico)",
    "  4. Al Borde del Burnout - Ecosistema digital con Next.js y gestión de estado global",
    "",
    "Visita la pestaña de Proyectos para más detalles.",
  ],
  contact: () => [
    "Información de Contacto:",
    "  Email:     eduardhernandezventos@gmail.com",
    "  GitHub:    github.com/trosdesuru",
    "  LinkedIn:  linkedin.com/in/eduard-hernandez-ventos",
    "  Portfolio: eduardhernandez-portfolio.vercel.app",
  ],
  themes: () => [
    "Available themes:",
    ...THEME_KEYS.map(
      (theme, i) => `  ${theme}${i === 0 ? "  (default)" : ""}`,
    ),
    "",
    'Use "theme <name>" para cambiar de tema.',
  ]
};

const processCommand = (input: string): TerminalLine[] => {
  const trimmed = input.trim();
  const lines: TerminalLine[] = [{ type: "input", content: `$ ${trimmed}` }];

  if (!trimmed) {
    return lines;
  }

  // EASTER EGG: sudo hire eduard
  if (trimmed.toLowerCase() === "sudo hire eduard") {
    const output = [
      "Iniciando protocolo de contratación...",
      "Analizando perfil híbrido (Diseño UX + Arquitectura Frontend)...",
      "[████████████████████] 100%",
      "Match perfecto encontrado. Habilidades de UX Engineer validadas.",
      "Redirigiendo propuesta a: eduardhernandezventos@gmail.com",
      "¡Gracias por la confianza! Hablemos pronto.",
    ];
    output.forEach((line) => lines.push({ type: "output", content: line }));
    return lines;
  }

  const parts = trimmed.split(" ");
  const cmd = parts[0].toLowerCase();
  const args = parts.slice(1);

  if (cmd === "clear") {
    return [];
  }

  if (cmd === "theme" && args[0]) {
    if ((THEME_KEYS as string[]).includes(args[0])) {
      document.documentElement.setAttribute("data-theme", args[0]);
      localStorage.setItem("theme", args[0]);
      lines.push({ type: "output", content: `Theme changed to ${args[0]}` });
    } else {
      lines.push({
        type: "error",
        content: `Unknown theme: ${args[0]}. Escribe "themes" para ver las opciones.`,
      });
    }
    return lines;
  }

  if (cmd === "theme") {
    lines.push({
      type: "error",
      content: 'Usage: theme <name>. Escribe "themes" para ver las opciones.',
    });
    return lines;
  }

  if (cmd === "echo") {
    lines.push({ type: "output", content: args.join(" ") });
    return lines;
  }

  if (commands[cmd]) {
    const output = commands[cmd]();
    output.forEach((line) => {
      lines.push({ type: "output", content: line });
    });
  } else {
    lines.push({
      type: "error",
      content: `Command not found: ${cmd}. Escribe "help" para ver los comandos disponibles.`,
    });
  }

  return lines;
};

interface TerminalProps {
  onToggle: () => void;
}

const Terminal = ({ onToggle }: TerminalProps) => {
  const [lines, setLines] = useState<TerminalLine[]>([
    {
      type: "output",
      content: "¡Bienvenido a la terminal interactiva!",
    },
    {
      type: "output",
      content:
        'Escribe "help" para ver los comandos o prueba con "sudo hire eduard".',
    },
    { type: "output", content: "" },
  ]);
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();

    if (trimmed) {
      const cmd = trimmed.split(" ")[0].toLowerCase();
      track("Terminal Command Used", { command: cmd });
    }

    if (trimmed === "clear") {
      setLines([]);
    } else {
      const newLines = processCommand(input);
      setLines((prev) => [...prev, ...newLines]);
    }

    if (trimmed) {
      setCommandHistory((prev) => [...prev, trimmed]);
    }
    setHistoryIndex(-1);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();

      if (commandHistory.length > 0) {
        const newIndex =
          historyIndex < commandHistory.length - 1
            ? historyIndex + 1
            : historyIndex;

        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || "");
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();

      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;

        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || "");
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  const handleTerminalClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className={styles.terminal}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <VscTerminal className={styles.terminalIcon} />
          <span>Terminal</span>
        </div>
        <div className={styles.headerRight}>
          <button onClick={onToggle} className={styles.headerBtn} title="Close">
            <VscClose size={14} />
          </button>
        </div>
      </div>
      <div
        className={styles.body}
        ref={terminalRef}
        onClick={handleTerminalClick}
      >
        {lines.map((line, index) => (
          <div
            key={index}
            className={`${styles.line} ${
              line.type === "error"
                ? styles.error
                : line.type === "input"
                  ? styles.input
                  : ""
            }`}
          >
            {line.content}
          </div>
        ))}
        <form onSubmit={handleSubmit} className={styles.inputLine}>
          <span className={styles.prompt}>$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className={styles.input}
            autoComplete="off"
            spellCheck={false}
          />
        </form>
      </div>
    </div>
  );
};

export default Terminal;
