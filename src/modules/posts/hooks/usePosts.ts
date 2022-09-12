import { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../../../core/api/fetcher";
import { useFilter } from "../../../core/contexts/FilterContext";
import { useFilteredUser } from "../../../core/contexts/UserContext";
import { PostProps } from "../components/post";

export interface UsePostsProps {
  page?: number;
  limit?: number;
}

export const usePosts = ({ page = 1, limit = 10 }: UsePostsProps) => {
  const [posts, setPosts] = useState([] as PostProps[]);
  const user = useFilteredUser();
  const filter = useFilter().currentFilter;

  useEffect(() => {
    setPosts([]);
  }, [user]);

  const filterQuery = user ? `&userId=${user.id}` : "";
  const { data, error } = useSWR(
    filter.length > 0 && !user
      ? null
      : `/posts?_page=${page}&_limit=${limit}${filterQuery}`,
    fetcher
  );

  useEffect(() => {
    data?.length > 0 && console.log(data);
    data?.length > 0 && setPosts((prev) => [...prev, ...data]);
  }, [data]);

  return {
    error,
    isLoading: !data,
    posts,
    hasMore: data?.length !== 0,
  };
};
