import React from 'react';

const LinkButton = ({ name, color, href, className, target, rel }) => {
  const buttonStyle = {
    ...{
      color: 'white',
      cursor: 'pointer',
      borderRadius: '0.4rem',
      padding: '0.75rem 1.2rem',
      transition: 'var(--transition)',
      backgroundColor: color || 'purple',
      textDecoration: 'none',
      justifyContent: 'center',
      marginTop: '2.5rem',
      gap: '1.2rem',
    },
    ...(href && {
      display: 'inline-block',
      width: 'max-content',
      border: `1px solid purple`,
      textDecorations: 'none',
    }),
  };

  return (
    <a
      href={href}
      className={`btn ${className}`}
      style={buttonStyle}
      target={target}
      rel={rel}
    >
      {name}
    </a>
  );
};

LinkButton.defaultProps = {
  href: '#',
  style: {},
  color: 'purple',
  
};

export default LinkButton;