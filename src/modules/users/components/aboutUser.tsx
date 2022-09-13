import { HelloMessageProps } from "../../../core/constants/messages";
import { useUser } from "../../../core/contexts/UserContext";
import { useHelloEffect } from "../../../core/hooks/useHelloEffect";

export interface AboutUserProps {
  title: string;
  userId: number;
}

export const AboutUser = ({
  title,
  userId,
  propsMessage,
}: AboutUserProps & HelloMessageProps) => {
  useHelloEffect({ propsMessage, fun: AboutUser });

  const user = useUser({ userId });
  return (
    <div className="flex flex-col items-center justify-center text-font-primary dark:text-font-primary-dark">
      <div className="text-2xl">{title}</div>
      <div>{user?.name}</div>
      <div>{`username: ${user?.username}`}</div>
      <div>{`email: ${user?.email}`}</div>
      <div>{`phone: ${user?.phone}`}</div>
      <div>{`address: ${user?.address.city}, ${user?.address.street}, ${user?.address.zipcode}`}</div>
    </div>
  );
};
