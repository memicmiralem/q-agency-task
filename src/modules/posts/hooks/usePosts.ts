import useSWR from "swr";
import { fetcher } from "../../../core/api/fetcher";
import { PostProps } from "../components/post";

export interface UsePostsProps {
  page?: number;
  limit?: number;
}

export const usePosts = ({ page = 1, limit = 8 }: UsePostsProps) => {
  const { data, error } = useSWR(
    `/posts?_page=${page}&_limit=${limit}`,
    fetcher
  );
  return {
    data: data as PostProps[],
    error,
  };
};
