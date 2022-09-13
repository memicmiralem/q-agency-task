import { HelloMessageProps } from "../../../core/constants/messages";
import { useHelloEffect } from "../../../core/hooks/useHelloEffect";
import { Error } from "../../../shared/components/error";
import { Loading } from "../../../shared/components/loading";
import { useComments } from "../hooks/useComments";

export interface CommentsProps {
  postId: number;
}

export const Comments = ({
  postId,
  propsMessage,
}: CommentsProps & HelloMessageProps) => {
  useHelloEffect({ propsMessage, fun: Comments });

  const { data, error } = useComments({ postId });
  if (error)
    return (
      <div className="h-full w-full flex items-center justify-center">
        <Error propsMessage={propsMessage} />
      </div>
    );
  if (!data)
    return (
      <div className="h-full w-full flex items-center justify-center">
        <Loading propsMessage={propsMessage} />
      </div>
    );

  return (
    <div className="rounded border border-solid border-border-light dark:border-border-dark">
      <div className="-mt-3.5 ml-4 w-fit bg-card dark:bg-card-dark text-font-secondary dark:text-font-secondary-dark">
        Comments
      </div>
      <div className="flex flex-col pt-2">
        {data.map(({ id, name, email }) => (
          <div
            className="flex flex-col md:flex-row justify-between px-4 py-2 odd:bg-white even:bg-slate-50 odd:dark:bg-header-dark even:dark:bg-card-dark text-font-primary dark:text-font-primary-dark last:rounded-b"
            key={id}
          >
            <div>{name}</div>
            <div className="truncate self-end">{email}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
