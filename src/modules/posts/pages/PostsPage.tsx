import { useCallback, useRef, useState } from "react";
import { MemoPageHeaderWithFilter } from "../../../shared/components/pageHeaderWithFilter";
import { Post, PostProps } from "../components/post";
import { usePosts } from "../hooks/usePosts";

export const PostsPage = () => {
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);

  const { posts, error, isLoading, hasMore } = usePosts({ page, keyword });

  const observer = useRef<IntersectionObserver>();
  const topOfListRef = useRef<null | HTMLDivElement>(null);
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

  const handleScrollToTop = () => {
    topOfListRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="flex flex-col gap-y-4 scroll-mt-32" ref={topOfListRef}>
      <MemoPageHeaderWithFilter onFilterChange={onFilterChange} />
      <div>
        {posts?.map((e: PostProps, i) => (
          <Post key={i} {...e} />
        ))}
        <div
          ref={lastElementRef}
          onClick={handleScrollToTop}
          className="hover:font-semibold cursor-pointer w-fit"
        >
          Scroll to top
        </div>
        {error && <div>failed to load</div>}
        {isLoading && <div>loading...</div>}
      </div>
    </div>
  );
};
