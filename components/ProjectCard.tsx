'use client'

import Image from 'next/image';
import { VscLinkExternal } from 'react-icons/vsc';
import { track } from '@vercel/analytics';
import { Project } from '@/types';

import styles from '@/styles/ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
      onClick={() => {
        track('Project Clicked', { projectName: project.title });
      }}
    >
      <div className={styles.number}>
        <span>{String(index).padStart(2, '0')}</span>
      </div>

      <div className={styles.content}>
        <div className={styles.main}>
          <div className={styles.header}>
            <div className={styles.logoWrapper}>
              <Image
                src={project.logo}
                alt={`${project.title} logo`}
                width={18}
                height={18}
                className={styles.logo}
              />
            </div>
            <h3 className={styles.title}>{project.title}</h3>
          </div>

          <p className={styles.description}>{project.description}</p>
        </div>

        <div className={styles.action}>
          <span className={styles.link}>
            Ver Proyecto
            <VscLinkExternal size={12} />
          </span>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
