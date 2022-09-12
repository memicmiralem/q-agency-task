import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { PostsPage } from "./modules/posts/pages/PostsPage";
import { SinglePostPage } from "./modules/posts/pages/SinglePostPage";
import { PageNotFound } from "./shared/pages/PageNotFound";
import { ROUTES } from "./core/constants/routes";
import { BasePageLayout } from "./shared/pages/BasePageLayout";
import { UserProvider } from "./core/contexts/UserContext";
import { FilterProvider } from "./core/contexts/FilterContext";
import { HelloMessageProps } from "./core/constants/messages";
import { useHelloEffect } from "./core/hooks/useHelloEffect";

const App = ({ propsMessage }: HelloMessageProps) => {
  useHelloEffect({ propsMessage, fun: App });

  return (
    <BasePageLayout propsMessage={propsMessage}>
      <BrowserRouter>
        <UserProvider propsMessage={propsMessage}>
          <FilterProvider propsMessage={propsMessage}>
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
          </FilterProvider>
        </UserProvider>
      </BrowserRouter>
    </BasePageLayout>
  );
};

export default App;
