import Head from "../header/head/head";
import Footer from "../home/footer";

export default function OrderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="order-layout-wrapper bg-gray-50 min-h-screen">
      {/* Agar aap Order page par koi extra header ya banner dikhana chahte hain to yahan add karein */}
      {/* <Head /> */}

      {children}
      {/* <Footer />       */}
    </section>
  );
}