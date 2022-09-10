import { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../../../core/api/fetcher";
import { PostProps } from "../components/post";

export interface UsePostsProps {
  page?: number;
  limit?: number;
  keyword?: string;
}

export const usePosts = ({ page = 1, limit = 10, keyword }: UsePostsProps) => {
  const [posts, setPosts] = useState([] as PostProps[]);

  useEffect(() => {
    setPosts([]);
  }, [keyword]);

  const { data, error } = useSWR(
    `/posts?_page=${page}&_limit=${limit}`,
    fetcher
  );

  useEffect(() => {
    data?.length > 0 && setPosts((prev) => [...prev, ...data]);
  }, [data]);

  return {
    error,
    isLoading: !data,
    posts,
    hasMore: data?.length !== 0,
  };
};
