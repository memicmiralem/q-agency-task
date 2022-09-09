import useSWR from "swr";
import { fetcher } from "../../../core/api/fetcher";

export interface UseCommentsProps {
  postId: number;
}

export const useComments = ({ postId }: UseCommentsProps) => {
  const { data, error } = useSWR(`/posts/${postId}/comments`, fetcher);
  return {
    data,
    error,
  };
};
