import { useUser } from "../../../core/contexts/UserContext";
import { Comments } from "../../comments/components/comments";
import { useNavigate, generatePath } from "react-router-dom";
import { ROUTES } from "../../../core/navigation/routes";
export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const Post = ({ userId, id, title, body }: PostProps) => {
  const user = useUser({ userId });
  const navigate = useNavigate();
  const handleClick = () =>
    navigate({
      pathname: generatePath(ROUTES.SINGLE_POST, { id: id.toString() }),
    });
  return (
    <div
      className="flex flex-col gap-y-4 bg-white rounded p-5 border border-solid border-slate-300 hover:cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex justify-between text-font-primary">
        <div className="font-semibold text-xl">{title}</div>
        <div className="font-semibold min-w-fit">{user?.name}</div>
      </div>
      <div className="text-font-primary">{body}</div>
      <Comments postId={id} />
    </div>
  );
};
