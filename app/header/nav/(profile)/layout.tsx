import ProfileFooter from "./profilePage/footer";


export default function ProfileGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="home-layout-wrapper min-h-screen bg-white">
      {children}
      <ProfileFooter />
    </section>
  );
}
