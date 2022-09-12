import { HelloMessageProps } from "../../core/constants/messages";
import { useHelloEffect } from "../../core/hooks/useHelloEffect";

export const PageNotFound = ({ propsMessage }: HelloMessageProps) => {
  useHelloEffect({ propsMessage, fun: PageNotFound });

  return <div>404 page not found</div>;
};
