import type { ReactNode } from "react";
import NavBAr from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
// import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* <Analytics /> */}
      <NavBAr />
      <div className=" md:px-24 text-custom-button-secondary">{children}</div>
      <Footer />
    </>
  );
}
