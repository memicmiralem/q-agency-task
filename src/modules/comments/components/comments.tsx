import { useComments } from "../hooks/useComments";

export interface CommentProps {
  postId: number;
}

export const Comments = ({ postId }: CommentProps) => {
  const { data, error } = useComments({ postId });

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <div className="flex flex-col rounded border border-solid border-gray-200 p-4 gap-y-2">
      {data.map((e: any) => (
        <div className="flex justify-between" key={e.id}>
          <div className="">{e.name}</div>
          <div className="">{e.email}</div>
        </div>
      ))}
    </div>
  );
};
