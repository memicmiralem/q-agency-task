import { useEffect } from "react";

export interface UseHelloEffectProps {
  propsMessage: string;
  fun: Function;
}

export const useHelloEffect = ({ propsMessage, fun }: UseHelloEffectProps) => {
  useEffect(() => {
    console.log(`${propsMessage} ${fun.name}`);
    // eslint-disable-next-line
  }, []);
};
