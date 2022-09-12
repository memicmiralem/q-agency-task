import { useComments } from "../hooks/useComments";

export interface CommentsProps {
  postId: number;
}

export const Comments = ({ postId }: CommentsProps) => {
  const { data, error } = useComments({ postId });
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div className="flex flex-col rounded border border-solid border-gray-200 p-4 gap-y-2">
      {data.map(({ id, name, email }) => (
        <div className="flex justify-between" key={id}>
          <div>{name}</div>
          <div>{email}</div>
        </div>
      ))}
    </div>
  );
};
