import React, { Fragment, ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import Sidebar from "@/components/admin-sidebar/admin-sidebar";



interface LayoutProps {
  children: ReactNode;
}

export function Layout(props: LayoutProps): React.ReactElement {
  const { children } = props;
  return (
    <Fragment>
       <div className=" container-fluid flex min-h-screen">
        <div className="flex-1 flex flex-col">
          <Sidebar />
      
      
      <main className="flex-1 px-3 py-0 ml-0 lg:ml-64">
            {children}
          </main>
</div>
</div>
    </Fragment>
  );
}