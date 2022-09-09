import { Comments } from "../../comments/components/comments";
import { useUsers } from "../../users/hooks/useUsers";

export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const Post = ({ userId, id, title, body }: PostProps) => {
  const { data, error } = useUsers({ userId });
  console.log("data u postu", data);
  return (
    <div className="flex flex-col gap-y-4 bg-white rounded p-5">
      <div className="flex justify-between">
        <div className="font-semibold text-xl">{title}</div>
        <div className="font-semibold min-w-fit">{data?.name}</div>
      </div>
      <div>{body}</div>
      <Comments postId={id} />
    </div>
  );
};
