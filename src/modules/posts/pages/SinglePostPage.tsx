import { useParams } from "react-router-dom";
import { HelloMessageProps } from "../../../core/constants/messages";
import { useHelloEffect } from "../../../core/hooks/useHelloEffect";
import { BasicPageHeader } from "../../../shared/components/basicPageHeader";
import { Error } from "../../../shared/components/error";
import { PostDetails } from "../components/postDetails";

export const SinglePostPage = ({ propsMessage }: HelloMessageProps) => {
  useHelloEffect({ propsMessage, fun: SinglePostPage });

  const { id } = useParams();
  if (!id)
    return (
      <div
        data-testid="single-post-page-error"
        className="h-full w-full flex items-center justify-center"
      >
        <Error propsMessage={propsMessage} />
      </div>
    );
  return (
    <div data-testid="single-post-page" className="h-screen">
      <BasicPageHeader propsMessage={propsMessage} />
      <PostDetails id={id} propsMessage={propsMessage} />
    </div>
  );
};
