import { useEffect } from "react";
import { Post, PostProps } from "../components/post";
import { usePosts } from "../hooks/usePosts";

export const PostsPage = () => {
  const { data, error } = usePosts({});

  const handleScroll = (e: any) => {
    if (
      window.innerHeight + e.target.documentElement.scrollTop >
      e.target.documentElement.scrollHeight
    ) {
      //do smth
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  if (error) return <div>failed to load</div>;

  if (!data) return <div>loading...</div>;

  return (
    <div className="flex flex-col gap-y-4">
      {data?.map((e: PostProps) => (
        <Post key={e.id} {...e} />
      ))}
    </div>
  );
};
