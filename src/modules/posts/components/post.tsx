import { Comments } from "../../comments/components/comments";

export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const Post = ({ title, body, id }: PostProps) => {
  return (
    <div className="flex flex-col gap-y-2 bg-white rounded p-5">
      <div className="font-semibold text-xl">{title}</div>
      <div>{body}</div>
      <Comments postId={id} />
    </div>
  );
};
