
import "./globals.css";
import { Layout as RootLayout } from "@/components/layouts/root";
import { ToastContainer } from "react-toastify";


export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body>
        <RootLayout>
          {children}
          <ToastContainer />
        </RootLayout>
      </body>
    </html>
  );
}