import { IconType } from 'react-icons';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { SiNpm } from 'react-icons/si';

export interface SocialLink {
  id: string;
  name: string;
  icon: IconType;
  url: string;
  label: string;
  color?: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    name: 'GitHub',
    icon: FaGithub,
    url: 'https://github.com/rahuldadhich1517-sys',
    label: 'Visit GitHub profile',
    color: '#333333',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    icon: FaLinkedin,
    url: 'https://www.linkedin.com/in/rahul-dadhich-a40b67200',
    label: 'Visit LinkedIn profile',
    color: '#0A66C2',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    icon: FaInstagram,
    url: 'https://www.instagram.com/rahul_dadhich.dev/',
    label: 'Visit Instagram profile',
    color: '#E4405F',
  },
  {
    id: 'twitter',
    name: 'Twitter/X',
    icon: FaTwitter,
    url: 'https://twitter.com/rahuldadhich',
    label: 'Visit Twitter profile',
    color: '#000000',
  },
  {
    id: 'email',
    name: 'Email',
    icon: FaEnvelope,
    url: 'mailto:rahuldadhich1517@gmail.com',
    label: 'Send email',
    color: '#D93026',
  },
  {
    id: 'npm',
    name: 'NPM',
    icon: SiNpm,
    url: 'https://www.npmjs.com/~rahuldadhich1517',
    label: 'Visit NPM profile',
    color: '#CB3837',
  },
];

export const getSocialLink = (id: string): SocialLink | undefined => {
  return socialLinks.find((link) => link.id === id);
};

export const getSocialLinksByCategory = (
  category: 'social' | 'professional' | 'all'
): SocialLink[] => {
  if (category === 'professional') {
    return socialLinks.filter((link) =>
      ['github', 'linkedin', 'npm'].includes(link.id)
    );
  }
  if (category === 'social') {
    return socialLinks.filter((link) =>
      ['instagram', 'twitter'].includes(link.id)
    );
  }
  return socialLinks;
};
