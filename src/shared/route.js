import React from 'react';

const Route = ({ path, renderedComponent }) => {
  if (window.location.pathname === path) return renderedComponent;
  return null;
};

export default Route;
