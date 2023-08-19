import React from "react";
import Header from "./Header";

const Layout = ({children}: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <main className={"max-w-[1200px] mx-auto my-24"}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
