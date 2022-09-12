import { useParams } from "react-router-dom";
import { BasicPageHeader } from "../../../shared/components/basicPageHeader";
export const SinglePostPage = () => {
  const { id } = useParams();
  console.log("id je ", id);

  return (
    <div>
      <BasicPageHeader />
    </div>
  );
};
