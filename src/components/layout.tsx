import React, { ReactNode } from 'react';
import { ThemeProvider } from '@material-tailwind/react'; // Adjust this import according to your actual ThemeProvider location

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  if (!children) {
    throw new Error("Children must be provided to the Layout component");
  }
  
  return <ThemeProvider>{children}</ThemeProvider>;
}

export default Layout;
