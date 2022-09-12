import { useParams } from "react-router-dom";
import { BasicPageHeader } from "../../../shared/components/basicPageHeader";
import { PostDetails } from "../components/postDetails";

export const SinglePostPage = () => {
  const { id } = useParams();

  return (
    <div className="h-screen">
      <BasicPageHeader />
      <PostDetails id={id} />
    </div>
  );
};
