import { useCallback, useRef, useState } from "react";
import { PageHeaderWithFilter } from "../../../shared/components/pageHeaderWithFilter";
import { Post, PostProps } from "../components/post";
import { usePosts } from "../hooks/usePosts";

export const PostsPage = () => {
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);

  const { posts, error, isLoading, hasMore } = usePosts({ page, keyword });

  const observer = useRef<IntersectionObserver>();
  const lastElementRef = useCallback(
    (node: Element | null) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore]
  );

  const onFilterChange = (keyword: string) => {
    setKeyword(keyword);
    setPage(1);
  };

  return (
    <div className="flex flex-col gap-y-4">
      <PageHeaderWithFilter onFilterChange={onFilterChange} />
      <div>
        {posts?.map((e: PostProps, i) => (
          <Post key={i} {...e} />
        ))}
        <div ref={lastElementRef}></div>
        {error && <div>failed to load</div>}
        {isLoading && <div>loading...</div>}
      </div>
    </div>
  );
};
