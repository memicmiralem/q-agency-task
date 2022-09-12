import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PostsPage } from "./modules/posts/pages/PostsPage";
import { SinglePostPage } from "./modules/posts/pages/SinglePostPage";
import { PageNotFound } from "./shared/pages/PageNotFound";
import { ROUTES } from "./core/navigation/routes";
import { BasePageLayout } from "./shared/pages/BasePageLayout";
import { UserProvider } from "./core/contexts/UserContext";
import { FilterProvider } from "./core/contexts/FilterContext";

const App = () => {
  return (
    <BasePageLayout>
      <BrowserRouter>
        <UserProvider>
          <FilterProvider>
            <Routes>
              <Route path={ROUTES.POSTS} element={<PostsPage />} />
              <Route path={ROUTES.SINGLE_POST} element={<SinglePostPage />} />
              <Route path={ROUTES.NOT_FOUND} element={<PageNotFound />} />
            </Routes>
          </FilterProvider>
        </UserProvider>
      </BrowserRouter>
    </BasePageLayout>
  );
};

export default App;
