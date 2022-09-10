import { useCallback, useEffect, useRef, useState } from "react";
import { PageHeaderWithFilter } from "../../../shared/components/pageHeaderWithFilter";
import { Post, PostProps } from "../components/post";
import { usePosts } from "../hooks/usePosts";

export const PostsPage = () => {
  const [keyword, setKeyword] = useState("");
  const { data, error } = usePosts({});

  const observer = useRef<IntersectionObserver>();
  const lastElementRef = useCallback((node: any) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log("eo na dnu sam");
      }
    });
    if (node) observer.current.observe(node);
  }, []);
  if (error) return <div>failed to load</div>;

  if (!data) return <div>loading...</div>;

  const onFilterChange = (keyword: string) => {
    setKeyword(keyword);
  };
  return (
    <div className="flex flex-col gap-y-4">
      <PageHeaderWithFilter onFilterChange={onFilterChange} />
      {data?.map((e: PostProps, index) => {
        return data.length === index + 1 ? (
          <div key={e.id} ref={lastElementRef}>
            <Post {...e} />
          </div>
        ) : (
          <Post key={e.id} {...e} />
        );
      })}
    </div>
  );
};
