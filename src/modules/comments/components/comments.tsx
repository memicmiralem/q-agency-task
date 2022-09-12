import { Error } from "../../../shared/components/error";
import { Loading } from "../../../shared/components/loading";
import { useComments } from "../hooks/useComments";

export interface CommentsProps {
  postId: number;
}

export const Comments = ({ postId }: CommentsProps) => {
  const { data, error } = useComments({ postId });
  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div className="rounded border border-solid border-gray-300">
      <div className="-mt-3.5 ml-4 w-fit bg-white text-font-secondary">
        Comments
      </div>
      <div className="flex flex-col pt-2">
        {data.map(({ id, name, email }) => (
          <div
            className="flex justify-between px-4 py-2 odd:bg-white even:bg-slate-50 last:rounded-b"
            key={id}
          >
            <div>{name}</div>
            <div>{email}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
