import OrderMainSection from "./orderMainSection";
import OrderDefaultHero from "./components/OrderDefaultHero";
import Footer from "../home/footer";

type PageProps = {
  searchParams: Promise<{ from?: string; branch?: string }>;
};

export default async function OrderPage({ searchParams }: PageProps) {
  const sp = await searchParams;
  const fromLocation = sp.from === "location";

  if (fromLocation) {
    return (
      <div className="flex min-h-screen flex-col bg-gray-50">
        <div className="flex-1 min-h-0" aria-hidden />
        <Footer />
      </div>
    );
  }

  return (
    <>
      <OrderDefaultHero />
      <OrderMainSection />
    </>
  );
}
