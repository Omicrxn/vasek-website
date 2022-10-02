import React, { ReactElement } from "react";
import NavBar from "./navbar";
export default function PageLayout({ children }: { children: ReactElement }) {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
}
