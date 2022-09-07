import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import s from './DarkMode.module.css';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const handleChange = () => {
    if (theme === 'day') {
      setTheme('night');
    } else {
      setTheme('day');
    }
  };

  return (
    <div className={s.darkBox}>
      <DarkModeSwitch
        style={{
          marginLeft: '200px',
          background: '#0086f1',
          borderRadius: '20px',
          boxShadow:
            '0 0 10px #4aff1867, 0 0 10px #4aff1868, 0 0 40px #4aff1859,0 0 55px #4aff1866, 0 0 40px #4aff1865',
        }}
        // moonColor="#0813f4"
        sunColor="orange"
        // checked={isDarkMode}
        checked={theme === 'night'}
        onChange={handleChange}
        size={30}
      />
    </div>
  );
}
