"use client";

import React, { ReactElement } from "react";
import { ThemeProvider } from "@material-tailwind/react";

export function Layout({ children }: { children: ReactElement }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

export default Layout;
