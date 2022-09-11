import { useUser } from "../../../core/contexts/UserContext";
import { Comments } from "../../comments/components/comments";

export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const Post = ({ userId, id, title, body }: PostProps) => {
  const user = useUser({ userId });
  return (
    <div className="flex flex-col gap-y-4 bg-white rounded p-5">
      <div className="flex justify-between">
        <div className="font-semibold text-xl">{title}</div>
        <div className="font-semibold min-w-fit">{user?.name}</div>
      </div>
      <div>{body}</div>
      <Comments postId={id} />
    </div>
  );
};
