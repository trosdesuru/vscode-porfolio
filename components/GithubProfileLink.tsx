'use client';

import { VscGithub, VscLinkExternal } from 'react-icons/vsc';
import posthog from 'posthog-js';

import styles from '@/styles/GithubPage.module.css';

interface GithubProfileLinkProps {
  username: string;
}

const GithubProfileLink = ({ username }: GithubProfileLinkProps) => {
  return (
    <a
      href={`https://github.com/${username}`}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.profileLink}
      onClick={() => posthog.capture('github_profile_link_clicked', { username })}
    >
      <VscGithub size={18} />
      <span>Ver Perfil</span>
      <VscLinkExternal size={14} />
    </a>
  );
};

export default GithubProfileLink;
