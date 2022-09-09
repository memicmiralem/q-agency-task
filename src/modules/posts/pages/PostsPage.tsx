import { PostProps, usePosts } from "../hooks/usePosts";

export const PostsPage = () => {
  const { data, error } = usePosts();

  if (error) return <div>failed to load</div>;

  if (!data) return <div>loading...</div>;

  return (
    <div className="flex flex-col gap-y-4">
      {data?.map((e: PostProps) => (
        <div key={e.id}>{e.title}</div>
      ))}
    </div>
  );
};
