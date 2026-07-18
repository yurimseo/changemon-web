interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({
  children,
}: LayoutProps) {
  return (
    <main
      className="
        min-h-screen
        bg-[#F8F7F2]
        flex
        justify-center
      "
    >
      <div
        className="
          w-full
          max-w-md
          min-h-screen
          bg-white
          shadow-lg
          px-6
          py-8
        "
      >
        {children}
      </div>
    </main>
  );
}