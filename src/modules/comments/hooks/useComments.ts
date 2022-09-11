import useSWR from "swr";
import { fetcher } from "../../../core/api/fetcher";

export interface UseCommentsProps {
  postId: number;
}

export interface CommentProps {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export const useComments = ({ postId }: UseCommentsProps) => {
  const { data, error } = useSWR(`/posts/${postId}/comments`, fetcher);
  return {
    data: data as CommentProps[],
    error,
  };
};
