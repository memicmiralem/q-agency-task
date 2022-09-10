export interface BasePageLayoutProps {
  children?: React.ReactNode;
}

export const BasePageLayout = ({ children }: BasePageLayoutProps) => {
  return (
    <div className="w-screen h-full bg-gray-200 px-6 sm:px-28 md:px-40 lg:px-44 xl:px-80 2xl:px-96 relative">
      <div className="pt-32">{children}</div>
    </div>
  );
};
