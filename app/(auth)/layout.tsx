interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-full flex flex-col justify-center md:max-w-md mx-auto">
      {children}
    </div>
  );
}
