import { useCallback, useEffect, useRef, useState } from "react";
import { useFilter } from "../../../core/contexts/FilterContext";
import { Loading } from "../../../shared/components/loading";
import { Error } from "../../../shared/components/error";
import { PageHeaderWithFilter } from "../../../shared/components/pageHeaderWithFilter";
import { Post, PostProps } from "../components/post";
import { usePosts } from "../hooks/usePosts";
import { HelloMessageProps } from "../../../core/constants/messages";
import { useHelloEffect } from "../../../core/hooks/useHelloEffect";

export const PostsPage = ({ propsMessage }: HelloMessageProps) => {
  useHelloEffect({ propsMessage, fun: PostsPage });

  const [page, setPage] = useState(1);
  const filter = useFilter().currentFilter;

  useEffect(() => {
    setPage(1);
  }, [filter]);

  const { posts, error, isLoading, hasMore } = usePosts({
    page,
  });

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

  const handleScrollToTop = () => {
    topOfListRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <div className="flex flex-col gap-y-4 scroll-mt-32" ref={topOfListRef}>
      <PageHeaderWithFilter propsMessage={propsMessage} />
      <div className="flex flex-col gap-y-4">
        {posts?.map((e: PostProps, i) => (
          <Post key={i} {...e} propsMessage={propsMessage} />
        ))}
      </div>
      <div
        ref={lastElementRef}
        onClick={handleScrollToTop}
        className="w-full flex flex-col items-center justify-center pb-10"
      >
        {error && <Error propsMessage={propsMessage} />}
        {isLoading && <Loading propsMessage={propsMessage} />}
        <div className="hover:font-semibold cursor-pointer w-fit">
          Scroll to top
        </div>
      </div>
    </div>
  );
};
