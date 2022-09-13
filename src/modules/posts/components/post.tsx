import { useUser } from "../../../core/contexts/UserContext";
import { Comments } from "../../comments/components/comments";
import { useNavigate, generatePath } from "react-router-dom";
import { ROUTES } from "../../../core/constants/routes";
import { HelloMessageProps } from "../../../core/constants/messages";
import { useHelloEffect } from "../../../core/hooks/useHelloEffect";
export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const Post = ({
  userId,
  id,
  title,
  body,
  propsMessage,
}: PostProps & HelloMessageProps) => {
  useHelloEffect({ propsMessage, fun: Post });

  const user = useUser({ userId });
  const navigate = useNavigate();
  const handleClick = () =>
    navigate({
      pathname: generatePath(ROUTES.SINGLE_POST, { id: id.toString() }),
    });
  return (
    <div
      data-testid="post"
      className="flex flex-col gap-y-4 bg-card dark:bg-card-dark rounded p-5 border border-solid border-border-light dark:border-border-dark hover:cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex justify-between text-font-primary dark:text-font-primary-dark">
        <div className="font-semibold text-xl">{title}</div>
        <div className="font-semibold min-w-fit">{user?.name}</div>
      </div>
      <div className="text-font-primary dark:text-font-primary-dark">
        {body}
      </div>
      <Comments postId={id} propsMessage={propsMessage} />
    </div>
  );
};
