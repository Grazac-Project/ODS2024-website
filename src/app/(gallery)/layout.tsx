import TopContent from "./Top";

export default function GallaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopContent />
      {children}
    </>
  );
}
