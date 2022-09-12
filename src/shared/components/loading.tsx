import { ReactComponent as LoadingIcon } from "../../assets/loading.svg";
import { HelloMessageProps } from "../../core/constants/messages";
import { useHelloEffect } from "../../core/hooks/useHelloEffect";

export const Loading = ({ propsMessage }: HelloMessageProps) => {
  useHelloEffect({ propsMessage, fun: Loading });

  return <LoadingIcon width={24} className="animate-spin" />;
};
