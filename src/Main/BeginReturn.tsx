import React from 'react';

import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import IconButton from '@mui/material/IconButton';
import { useDarkMode } from 'next-dark-mode';

function BeginReturn() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const { darkModeActive } = useDarkMode();

  return (
    <IconButton
      style={{
        position: 'fixed',
        zIndex: 99,
        bottom: 20,
        right: 20,
        color: '#a39a8e',
        backgroundColor: !darkModeActive ? '#121212b0' : '#ffffffc7',
      }}
      onClick={handleClick}
      aria-label="to top"
      component="span"
      size="large"
    >
      <ExpandLessIcon fontSize="inherit" />
    </IconButton>
  );
}
export default BeginReturn;
