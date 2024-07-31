import React, { ReactNode } from 'react';
import { ThemeProvider } from '@material-tailwind/react'; // Adjust this import according to your actual ThemeProvider location

interface LayoutProps {
  children: ReactNode | null | undefined;
}

export function Layout({ children }: LayoutProps) {
  return <ThemeProvider>{children ?? <></>}</ThemeProvider>;
}

export default Layout;
