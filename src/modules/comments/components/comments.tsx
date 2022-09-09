import { useComments } from "../hooks/useComments";

export interface CommentProps {
  postId: number;
}

export const Comments = ({ postId }: CommentProps) => {
  const { data, error } = useComments({ postId });

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <div className="flex flex-col">
      {data.map((e: any) => (
        <div key={e.id}>{e.body}</div>
      ))}
    </div>
  );
};
