import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <p>© {new Date().getFullYear()} Arnold. All rights reserved.</p>
    </footer>
  );
};

export default Footer;