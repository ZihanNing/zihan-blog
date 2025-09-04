import React from "react";

type Props = {
  linkedin?: string; // full URL
  github?: string;   // full URL
  google_scholar?: string;   // full URL
};

export default function SocialLinks({ linkedin, github, google_scholar }: Props) {
  const linkStyle: React.CSSProperties = { display: "flex", alignItems: "center", gap: 12, margin: "8px 0" };
  const iconSize = 24;

  return (
    <div style={linkStyle}>
      {linkedin && (
        <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" width={iconSize} height={iconSize} />
        </a>
      )}
      {github && (
        <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <img src="https://cdn.simpleicons.org/github/181717" alt="GitHub" width={iconSize} height={iconSize} />
        </a>
      )}
      {google_scholar && (
        <a href={google_scholar} target="_blank" rel="noopener noreferrer" aria-label="Google Scholar">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Scholar_logo.svg" alt="Google Scholar" width={iconSize} height={iconSize} />
        </a>
      )}
    </div>
  );
}
