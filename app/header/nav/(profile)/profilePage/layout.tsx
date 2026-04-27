import ProfileFooter from "./footer";

export default function ProfileGroupLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <section className="profile-layout-wrapper min-h-screen bg-white">
        {children}
        <ProfileFooter />
      </section>
    );
  }
  