import Navbar from "@/src/components/Navbar";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="md:px-10 px-5 pt-20">
        {children}
        </main>
    </>
  );
}
