import React, { ReactNode } from 'react';
import { ThemeProvider } from '@material-tailwind/react';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  if (typeof children !== 'string' && typeof children !== 'number' && typeof children !== 'boolean' && typeof children !== 'bigint' && React.isValidElement(children) || (Array.isArray(children) && children.every(child => React.isValidElement(child)))) {
    return <ThemeProvider>{children}</ThemeProvider>;
  } else {
    return <ThemeProvider>{null}</ThemeProvider>;
  }
}

export default Layout;
