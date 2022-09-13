import { HelloMessageProps } from "../../core/constants/messages";
import { useHelloEffect } from "../../core/hooks/useHelloEffect";

export const BasicPageHeader = ({ propsMessage }: HelloMessageProps) => {
  useHelloEffect({ propsMessage, fun: BasicPageHeader });

  return (
    <div className="w-full h-20 bg-header dark:bg-header-dark top-0 left-0 fixed flex items-center justify-around">
      <div className="text-white text-3xl font-semibold">
        {"Posts&Comments"}
      </div>
    </div>
  );
};
