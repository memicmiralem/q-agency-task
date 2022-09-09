import { Post, PostProps } from "../components/post";
import { usePosts } from "../hooks/usePosts";

export const PostsPage = () => {
  const { data, error } = usePosts();

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
