import { PropsWithChildren } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};
