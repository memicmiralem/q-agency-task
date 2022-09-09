import useSWR from "swr";
import { fetcher } from "../../../core/api/fetcher";
import { PostProps } from "../components/post";

export const usePosts = () => {
  const { data, error } = useSWR(`/posts`, fetcher);
  return {
    data: data as PostProps[],
    error,
  };
};
