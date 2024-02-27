import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from "../context/themeContext"
export function Button({ to, onClick, label, name }) {
  const { theme } = useContext(ThemeContext)
  return (
    <Link to={to}>
      <button onClick={onClick} style={{color : theme.color , background : theme.background,margin:5,}}>
        {label}
      </button>
    </Link>
  );
};

