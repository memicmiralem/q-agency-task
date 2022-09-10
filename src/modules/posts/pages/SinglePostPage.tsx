import { useParams } from "react-router-dom";
import { BasicPageHeader } from "../../../shared/components/basicPageHeader";
export const SinglePostPage = () => {
  const { id } = useParams();

  return (
    <div>
      <BasicPageHeader />
    </div>
  );
};
