import { HelloMessageProps } from "../../core/constants/messages";
import { useHelloEffect } from "../../core/hooks/useHelloEffect";

export interface BasePageLayoutProps {
  children?: React.ReactNode;
}

export const BasePageLayout = ({
  children,
  propsMessage,
}: BasePageLayoutProps & HelloMessageProps) => {
  useHelloEffect({ propsMessage, fun: BasePageLayout });

  return (
    <div className="w-full h-full bg-background dark:bg-background-dark px-6 sm:px-28 md:px-40 lg:px-44 xl:px-80 2xl:px-96 relative">
      <div className="pt-32">{children}</div>
    </div>
  );
};
