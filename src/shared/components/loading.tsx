import { ReactComponent as LoadingIcon } from "../../assets/loading.svg";
import { HelloMessageProps } from "../../core/constants/messages";
import { useHelloEffect } from "../../core/hooks/useHelloEffect";

export const Loading = ({ propsMessage }: HelloMessageProps) => {
  useHelloEffect({ propsMessage, fun: Loading });

  return (
    <LoadingIcon
      data-testid="loading-icon"
      width={24}
      className="animate-spin fill-font-primary dark:fill-font-primary-dark"
    />
  );
};
