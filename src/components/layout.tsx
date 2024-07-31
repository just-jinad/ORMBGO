import React, { ReactNode } from 'react';
import { ThemeProvider } from '@material-tailwind/react'; // Adjust this import according to your actual ThemeProvider location

interface LayoutProps {
  children: ReactNode; // Ensure children is defined as ReactNode
}

export function Layout({ children }: LayoutProps) {
  return <ThemeProvider>{children ?? null}</ThemeProvider>;
}

export default Layout;
