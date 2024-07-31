import React, { ReactNode } from 'react';
import { ThemeProvider } from '@material-tailwind/react';

interface LayoutProps {
  children: ReactNode;
}

const isValidReactNode = (node: ReactNode): boolean => {
  return (
    typeof node === 'string' ||
    typeof node === 'number' ||
    typeof node === 'boolean' ||
    React.isValidElement(node) ||
    (Array.isArray(node) && node.every(isValidReactNode))
  );
};

export function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider>
      {isValidReactNode(children) ? children : null}
    </ThemeProvider>
  );
}

export default Layout;
