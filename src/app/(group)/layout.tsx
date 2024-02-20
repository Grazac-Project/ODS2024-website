import TopContent from "@/components/gallery/top";

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
