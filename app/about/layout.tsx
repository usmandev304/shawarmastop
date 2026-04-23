import Head from "../header/head/head";
import Footer from "../home/footer";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="home-layout-wrapper bg-white min-h-screen">
      {/* <Head /> */}
      {children}
      {/* <Footer /> */}
    </section>
  );
}