import { useParams } from "react-router-dom";
export const SinglePostPage = () => {
  const { id } = useParams();

  return <div> {`single post page ${id}`}</div>;
};
