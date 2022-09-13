import { HelloMessageProps } from "../../../core/constants/messages";
import { useUser } from "../../../core/contexts/UserContext";
import { useHelloEffect } from "../../../core/hooks/useHelloEffect";
import { Error } from "../../../shared/components/error";
import { Loading } from "../../../shared/components/loading";
import { Comments } from "../../comments/components/comments";
import { AboutUser } from "../../users/components/aboutUser";
import { usePost } from "../hooks/usePost";

export interface PostDetailsProps {
  id: string | undefined;
}

export const PostDetails = ({
  id,
  propsMessage,
}: PostDetailsProps & HelloMessageProps) => {
  useHelloEffect({ propsMessage, fun: PostDetails });

  const { data, error } = usePost({ id });
  const user = useUser({ userId: data?.userId });

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
  const { title, body, userId } = data;

  return (
    <div className="flex flex-col gap-y-6 bg-card dark:bg-card-dark rounded p-5 border border-solid border-border-light dark:border-border-dark">
      <div className="flex flex-row-reverse">
        <div className="text-font-secondary dark:text-font-secondary-dark">{`Author: ${user?.name}`}</div>
      </div>
      <div className="flex items-center justify-center text-font-primary dark:text-font-primary-dark">
        <div className="font-semibold text-2xl w-fit">{title}</div>
      </div>
      <div className="text-font-primary dark:text-font-primary-dark pb-4">
        {body}
      </div>
      {id && <Comments postId={parseInt(id)} propsMessage={propsMessage} />}
      <AboutUser
        title="Contact The Author"
        userId={userId}
        propsMessage={propsMessage}
      />
    </div>
  );
};
