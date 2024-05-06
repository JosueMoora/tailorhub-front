import Navbar from "@/src/components/Navbar";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="md:px-10 pt-20 px-5">
        {children}
        </main>
    </>
  );
}
