import useSWR from "swr";
import { fetcher } from "../../../core/api/fetcher";

export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const usePosts = () => {
  const { data, error } = useSWR(`/posts`, fetcher);
  return {
    data: data as PostProps[],
    error,
  };
};
