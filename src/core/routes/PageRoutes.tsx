import { Routes, Route, Navigate } from "react-router-dom";
import { PostsPage } from "../../modules/posts/pages/PostsPage";
import { SinglePostPage } from "../../modules/posts/pages/SinglePostPage";
import { PageNotFound } from "../../shared/pages/PageNotFound";
import { HelloMessageProps } from "../constants/messages";
import { ROUTES } from "../constants/routes";
import { useHelloEffect } from "../hooks/useHelloEffect";

export const PageRoutes = ({ propsMessage }: HelloMessageProps) => {
  useHelloEffect({ propsMessage, fun: PageRoutes });
  return (
    <Routes>
      <Route index element={<Navigate replace to={ROUTES.POSTS} />} />
      <Route
        path={ROUTES.POSTS}
        element={<PostsPage propsMessage={propsMessage} />}
      />
      <Route
        path={ROUTES.SINGLE_POST}
        element={<SinglePostPage propsMessage={propsMessage} />}
      />
      <Route
        path={ROUTES.NOT_FOUND}
        element={<PageNotFound propsMessage={propsMessage} />}
      />
    </Routes>
  );
};
