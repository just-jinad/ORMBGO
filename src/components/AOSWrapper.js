"use client"; 

import React from 'react';
import useAOS from './useAOS';

const AOSWrapper = ({ children }) => {
  useAOS(); 

  return <>{children}</>;
};

export default AOSWrapper;
