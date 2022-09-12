import useSWR from "swr";
import { fetcher } from "../../../core/api/fetcher";
import { PostProps } from "../components/post";

export interface UsePostProps {
  id: string | undefined;
}

export const usePost = ({ id }: UsePostProps) => {
  const { data, error } = useSWR(id ? `/posts/${id}` : null, fetcher);

  return {
    data: data as PostProps,
    error,
  };
};
