import { ReactComponent as ErrorIcon } from "../../assets/error.svg";
import { HelloMessageProps } from "../../core/constants/messages";
import { useHelloEffect } from "../../core/hooks/useHelloEffect";

export const Error = ({ propsMessage }: HelloMessageProps) => {
  useHelloEffect({ propsMessage, fun: Error });

  return (
    <ErrorIcon
      data-testid="error-icon"
      width={24}
      className="animate-pulse fill-font-primary dark:fill-font-primary-dark"
    />
  );
};
